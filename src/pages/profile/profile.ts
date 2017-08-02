import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
import {ProfileDetails} from '../../models/profileDetails';
import {AttendancePage} from '../attendance/attendance';
import { AlertController } from 'ionic-angular';


import {ProfessorPage} from '../Professor/Professor';
import * as moment from 'moment';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profiledetails:FirebaseObjectObservable<ProfileDetails>;
  tabBarElement: any;




  periods(): string[] {
    return [
      "1","2","3","4","5","6","7","8"
    ];
  }
  period: string = "1";



  constructor(public navCtrl: NavController, public navParams: NavParams,private afauth:AngularFireAuth, private tc:ToastController,private alertCtrl: AlertController, private afData:AngularFireDatabase) {

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.initializeYear();
    this.initializeDepartment();
    this.initializeSubject();
    this.initializeSemester();

  }


  years: any[];
  departments: any[];
  subjects: any[];
  semesters: any[];

   selectedDepartments: any[];
   selectedSubjects: any[];
   selectedPeriods:any[];

   sYear: any;
   sDepartment: any;
   sSubject: any;
   sSemester: any;
   sPeriod:any;





  initializeYear(){
    this.years = [
      {id: 1, name: '1'},
      {id: 2, name: '2'},
      {id: 3, name: '3'},
      {id: 4, name: '4'}
    ];
  }

  initializeSemester(){
    this.semesters = [
      {id: 1, name: 'Odd'},
      {id: 2, name: 'Even'}
    ];
  }

  initializeDepartment(){
    this.departments = [
      {id: 1, name: 'CSE'},
      {id: 2, name: 'EEE'},
      {id: 3, name: 'ECE'},
      {id: 4, name: 'MECH'},
      {id: 5, name: 'IT'}
    ];
  }

 initializeSubject(){

    this.subjects = [
      {id: 1, name: 'RMT', year_id: 4, department_id: 1, semester_id:1},
      {id: 2, name: 'CNS', year_id: 4, department_id: 1, semester_id:1},
      {id: 3, name: 'GTA', year_id: 4, department_id: 1, semester_id:1},
      {id: 4, name: 'CF', year_id: 4, department_id: 1, semester_id:1},
      {id: 5, name: 'GCC', year_id: 4, department_id: 1, semester_id:1},
      {id: 6, name: 'AI', year_id: 4, department_id: 1, semester_id:2},
      {id: 7, name: 'DSP', year_id: 4, department_id: 1, semester_id:2},
      {id: 8, name: 'MPMC', year_id: 4, department_id: 1, semester_id:2},
      {id: 9, name: 'PDS', year_id: 4, department_id: 1, semester_id:2}
    ];
  }

  setPeriod(sPeriod) {
      this.selectedPeriods = this.sPeriod;

  }

  setDepartmentValues(sYear) {
      this.selectedDepartments = this.departments;

  }

  setSubjectValues(sDepartment, sYear, sSemester) {
      this.selectedSubjects = this.subjects.filter(subject => subject.department_id == sDepartment.id &&
      subject.year_id == sYear.id && subject.semester_id == sSemester.id
      );
  }

  ionViewWillEnter() {

    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    var time = moment();

    var format = 'hh:mm:ss'

    var period1 = moment('8:00:00', format);
    var period2 = moment('9:00:00', format);
    var period3 = moment('10:10:00', format);
    var period4 = moment('11:00:00', format);
    var period5 = moment('11:50:00', format);
    var period6 = moment('13:20:00', format);
    var period7 = moment('14:20:00', format);
    var period8 = moment('15:10:00', format);
    var period9 = moment('16:10:00', format);

    if (time.isBetween(period1, period2)) {
      this.period = '1';
    }

    if (time.isBetween(period2, period3)) {
      this.period = '2';
    }

    if (time.isBetween(period3, period4)) {
      this.period = '3';
    }
    if (time.isBetween(period4, period5)) {
      this.period = '4';
    }
    if (time.isBetween(period5, period6)) {
      this.period = '5';
    }
    if (time.isBetween(period6, period7)) {
      this.period = '6';
    }
    if (time.isBetween(period7, period8)) {
      this.period = '7';
    }
    if (time.isBetween(period8, period9)) {
      this.period = '8';
    }

    this.afauth.authState.subscribe(data =>
    {
        if(data && data.email && data.uid)
        {
            console.log(data.email);
            this.tc.create({
              message:'You are logged in,${{data.email}}',
              duration:3000
            }).present();
			this.profiledetails = this.afData.object('Professor/'+data.uid);

          }
          else
          {
            this.tc.create({
              message:'Something went wrong Bosco',
              duration:3000
            }).present();
          }
    } );
  }

  isEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
};

  logout()
  {
      console.log("logout button fired");
      this.afauth.auth.signOut();
      this.navCtrl.setRoot(ProfessorPage);
  }

  markAttendance(sYear, sDepartment, sSubject)
  {
    if("undefined" === typeof sYear || "undefined" === typeof sDepartment /*|| "undefined" === typeof sSubject*/){
      let alert = this.alertCtrl.create
      ({
          title: 'Insufficient Details',
          subTitle: 'Please enter all the details',
          buttons: ['OK']
      });
      alert.present();
    }
    else{
      console.log("attendance firered"+sYear.name+sDepartment.name+this.selectedPeriods);
      this.navCtrl.setRoot(AttendancePage,{
        param1: sYear.name, param2: sDepartment.name,param3:this.selectedPeriods
      });
    }
  }


}
