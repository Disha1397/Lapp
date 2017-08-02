import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from '../profile/profile'
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";


import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';

import {NameDetails} from '../../models/namedetails';
import {attendanceDetails} from '../../models/attendanceDetails';

import 'rxjs/add/operator/map';

/**
 * Generated class for the AttendancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})

export class AttendancePage {

  year:any;
  dept:any;
  periods:any;
  data:any[];
  data1:any[];
  public name:Array<any> = [];
  public attendance:Array<any> = [];
  public regNo:Array<any> = [];
  attendanceArray: Array<any> = [];
  public presentArray: Array<any> = [];
  public absentArray: Array<any> = [];
  public index: number;


  form: FormGroup;
  tabBarElement: any;

  selectedStudents: string[] = [''];
  namedetails:FirebaseObjectObservable<NameDetails>;
  namedetails2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afauth:AngularFireAuth,private afData:AngularFireDatabase, fb: FormBuilder)
  {

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.year = this.navParams.get('param1');

    this.dept = this.navParams.get('param2');

    this.periods = this.navParams.get("param3");

    this.namedetails = this.afData.object('Namelist/Namelist/'+this.dept+'/'+this.year+' Year/');
    this.namedetails.subscribe(data =>
    {

          let keys = Object.keys(data);
          this.data=keys;
          for (let i of keys)
          {
              this.regNo.push(i);
              this.namedetails2 = this.afData.object('Namelist/Namelist/'+this.dept+'/'+this.year+' Year/'+i);
              this.namedetails2.subscribe(data1 =>
              {

                    this.attendance.push(data1.Attendance);
                    this.name.push(data1.Name);

              });
          }
    });
  }



markAttendance(test,attendanceArray){
  if(attendanceArray){
    this.presentArray.push(test);
  }
  else{
    this.presentArray.splice(this.presentArray.indexOf(test),1);
  }
  

  //console.log("absent array is"+this.absentArray);
}

confirmAttendance(){
  this.absentArray = this.regNo.filter(item => this.presentArray.indexOf(item) < 0);
  console.log("present array is"+this.presentArray);
  console.log("absent array is"+this.absentArray);
 }

  ionViewWillEnter() {

    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');

  }
}
