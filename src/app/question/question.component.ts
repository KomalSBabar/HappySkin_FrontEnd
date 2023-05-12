import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { count } from 'console';
// import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  gridsize: number = 30;
  updateSetting(event: any) {
    this.gridsize = event.value;
  }

  div_first: any;
  div_second: any;
  questionFormgroup: any;
  questionFormgroup2: any;
  questionFormgroup3: any;
  questionFormgroup4: any;
  questionFormgroup6: any;
  questionFormgroup7: any;
  questionFormgroup8: any;
  questionFormgroup9: any;
  questionFormgroup10: any;
  questionFormgroup11: any;
  questionFormgroup12: any;
  questionFormgroup13: any;
  questionFormgroup14: any;
  questionFormgroup15: any;
  questionFormgroup17: any;
  questionFormgroup18: any;
  questionFormgroup19: any;
  questionFormgroup20: any;
  questionFormgroup21: any;
  questionFormgroup22:any;
  div_eleventh: any;
  div_thirteen: any;
  div_fourteen: any;
  div_fifteen: any;
  div_sixteen: any;
  submitted = false;
  div_ninth: any;
  div_tenth: any;
  div_nineteen: any;
  gender_error: boolean = false;
  checkb_error: any = false;
  div_third: any;
  div_fourth: any;
  div_sixth: any;
  val_gen: any;
  div_fifth: any;
  div_seventeen: any;
  any: any;
  div_seventh: any;
  div_eighteen: any;
  a: any;
  div_eight: any;
  div_twelveth: any;
  // formatLabel: any;
  div_twenty: any;
  div_twentyone: any;
  div_twentytwo:any;
  div_twentythree:any;
  questionFormgroup23:any;
  questionFormgroup24:any;
  questionFormgroup25:any;
  questionFormgroup26:any;
  div_twentyfour:any;
  div_twentyfive:any;
  div_twentysix:any;
  div_twentyseven:any;
  // slider:any;
  // output:any;





  constructor(private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {


    // var slider = document.getElementById("myRange");
    // var output = document.getElementById("demo");
    // output.innerHTML = slider.value;

    // slider.oninput = function () {
    //     output.innerHTML = this.value;
    // }

    // this.formatLabel(value : number): string {
    //   if (value >= 1000) {
    //     return Math.round(value / 1000) + 'k';
    //   }

    //   return `${value}`;
    // }




    this.questionFormgroup = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      phone_no: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]),



    })







    this.questionFormgroup2 = new FormGroup({

      gender_option: new FormControl('', [Validators.required]),
    })

    this.questionFormgroup3 = new FormGroup({

      gen_birth: new FormControl('', [Validators.required]),
    })
    this.questionFormgroup4 = new FormGroup({

      female_radio_option: new FormControl('', [Validators.required]),
    })

    // Face :new FormControl(),
    // Neck :new FormControl(),
    // Scholders_Chest_Back : new FormControl()

    // Face: false,
    // Neck: false,
    // Scholders_Chest_Back: false,

    this.questionFormgroup6 = new FormGroup({

      Face: new FormControl(),
      Neck: new FormControl(),
      Scholders_Chest_Back: new FormControl()

    })

    this.questionFormgroup7 = new FormGroup({

      skin_option: new FormControl('', [Validators.required]),
    })

    this.questionFormgroup8 = new FormGroup({
      White: new FormControl(),
      Hispanic: new FormControl(),
      Black: new FormControl(),
      East_Asian: new FormControl(),
      South_Asian: new FormControl(),
      Middle_Eastern: new FormControl(),
      Native_American: new FormControl(),
      Pacific_Islander: new FormControl(),
      other: new FormControl(),
    })

    this.questionFormgroup9 = new FormGroup({
      severity_acne: new FormControl('', [Validators.required])
    })

    this.questionFormgroup10 = new FormGroup({
      acne_to_scar: new FormControl('', [Validators.required])
    })

    this.questionFormgroup11 = new FormGroup({
      long_acne_had: new FormControl('', [Validators.required])
    })

    this.questionFormgroup12 = new FormGroup({
      family_acne: new FormControl('', [Validators.required])
    })

    this.questionFormgroup13 = new FormGroup({
      acne_bother: new FormControl('', [Validators.required])
    })

    this.questionFormgroup14 = new FormGroup({
      current_diet: new FormControl('', [Validators.required])
    })
    this.questionFormgroup15 = new FormGroup({
      chart_scale: new FormControl('', [Validators.required])


    })


    this.questionFormgroup17 = new FormGroup({
      used_topical_subs: new FormControl('', [Validators.required])
    })

    this.questionFormgroup18 = new FormGroup({
      oral_medication: new FormControl('', [Validators.required])
    })
    this.questionFormgroup19 = new FormGroup({
      allergic: new FormControl('', [Validators.required])
    })

    this.questionFormgroup20 = new FormGroup({
      supplements: new FormControl(),
      tetra: new FormControl(),
      birth_control: new FormControl(),
      dilantin: new FormControl(),
      oral_steriods: new FormControl(),
      St_john: new FormControl(),
      none: new FormControl()

    })
    this.questionFormgroup21 = new FormGroup({
    other_medic_using_current:new FormControl('', [Validators.required])
  })

 

  this.questionFormgroup22 = new FormGroup({
    cleanser: new FormControl(),
    moisturizer: new FormControl(),
    spf: new FormControl(),
    toner: new FormControl(),
    other: new FormControl(),
   

  })

  this.questionFormgroup23 = new FormGroup({
    additonal_detail:new FormControl('', [Validators.required])
  })

  this.questionFormgroup24 = new FormGroup({
    pregnant:new FormControl('', [Validators.required])
  })

  this.questionFormgroup25 = new FormGroup({
    b_feeding:new FormControl('', [Validators.required])
  })

  this.questionFormgroup26 = new FormGroup({
    taking_pills:new FormControl('', [Validators.required])
  })

 

  }













  //first form se reg-complete ko jayega

  back() {
    this.router.navigate(['/reg-complete']);
  }

  // second form what gender do you identify wale see first form jayega legal name wala

  back2() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_first.style.display = 'block';
    this.div_second.style.display = 'none';
  }

  // yeah third form wala birth-gender se second form multiple gen option tak
  back3() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_first.style.display = 'none';
    this.div_second.style.display = 'block';
    this.div_third.style.display = 'none';
  }

  // first form continue hoke multiple gen kai tarfa jate hue
  continue() {
    console.log(this.questionFormgroup.value)


    this.submitted = true;
    if (this.questionFormgroup.valid) {
      console.log('valid')
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'block';
    }
    else {
      console.log(' not valid - first form')
    }
  }

  // second form multiple gen se birth gen kai tarf 
  continue2() {


    if (this.questionFormgroup2.valid) {
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'block';
    } else {
      console.log(' not valid - second form')
      this.gender_error = true;
    }
  }

  // birth gen male ,female dono ko algh screen dikhani hain
  continue_gen() {
    if (this.questionFormgroup3.valid) {
      this.gender_error = false;
      this.val_gen = this.questionFormgroup3.value.gen_birth
      if (this.val_gen === 'Male') {

        this.div_first = document.getElementById('form1');
        this.div_second = document.getElementById('div2');
        this.div_third = document.getElementById('div3');
        this.div_fourth = document.getElementById('div4');
        this.div_fifth = document.getElementById('div5');
        this.div_first.style.display = 'none';
        this.div_second.style.display = 'none';
        this.div_third.style.display = 'none';
        this.div_fourth.style.display = 'block';
        this.div_fifth.style.display = 'none';
      }
      else if (this.val_gen === 'Female') {
        this.div_first = document.getElementById('form1');
        this.div_second = document.getElementById('div2');
        this.div_third = document.getElementById('div3');
        this.div_fourth = document.getElementById('div4');
        this.div_fifth = document.getElementById('div5');
        this.div_first.style.display = 'none';
        this.div_second.style.display = 'none';
        this.div_third.style.display = 'none';
        this.div_fourth.style.display = 'none';
        this.div_fifth.style.display = 'block';
      }
    }
    else {
      this.gender_error = true;
    }

  }
  // yeah comen  page hain male hog ato direct ayega female hoga toh ghumke ayega idhar hi open hua uska back button hain


  back4() {

    // male kaa back janeka
    if (this.val_gen === 'Male') {

      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'block';
      this.div_fourth.style.display = 'none';

    } else if (this.val_gen === 'Female') {

      // female kaa back janeka
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'block';
    }
  }


  // female wale alhgh part se wapss gen-birth wale page main
  back5() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'block';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';


  }

  // female wale page se commen wale page tak 
  continue5() {

    if (this.questionFormgroup4.valid) {
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'block';
      this.div_fifth.style.display = 'none';
    } else {
      this.gender_error = true;
    }

  }

  // comman wale page se fhirse question ka algh part chalu hoga
  common_tobreakingout() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'block';
  }
  // new part wale form see common page tak
  breakingpoint_common_back() {

    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'block';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';

  }


  // breaking out wale form see agee ka form 
  continue6() {


    console.log(this.questionFormgroup6.value)


    if (this.questionFormgroup6.valid) {

      this.gender_error = false;
      // this.checkb_error = false;

      var count = 0
      Object.keys(this.questionFormgroup6.value).forEach((key: any) => {
        if (this.questionFormgroup6.value[key] !== null) {
          count += 1;
        }
      })
      if (count === 0) {
        this.gender_error = true;
      }
      else {
        this.div_first = document.getElementById('form1');
        this.div_second = document.getElementById('div2');
        this.div_third = document.getElementById('div3');
        this.div_fourth = document.getElementById('div4');
        this.div_fifth = document.getElementById('div5');
        this.div_sixth = document.getElementById('div6');
        this.div_seventh = document.getElementById('div7');
        this.div_first.style.display = 'none';
        this.div_second.style.display = 'none';
        this.div_third.style.display = 'none';
        this.div_fourth.style.display = 'none';
        this.div_fifth.style.display = 'none';
        this.div_sixth.style.display = 'none';
        this.div_seventh.style.display = 'block';

      }
    } else {
      this.gender_error = true;
    }
  }


  // skin type se back hokar breaking pai janeka
  skin_type_back_breakingout() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'block';
    this.div_seventh.style.display = 'none';
  }

  //  skin typse see agee ka form ethincity wala
  continue7() {
    console.log(this.questionFormgroup7.value)
    if (this.questionFormgroup7.valid) {
      this.gender_error = false;


      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'block';
    }


    else {
      this.gender_error = true;
    }
  }


  // ethinc walee see
  continue8() {
    console.log(this.questionFormgroup8.value)
    if (this.questionFormgroup8.valid) {
      this.gender_error = false;
      console.log('valid kai andhar', this.questionFormgroup8.value)
      var count = 0
      Object.keys(this.questionFormgroup8.value).forEach((key: any) => {
        if (this.questionFormgroup8.value[key] !== null) {
          count += 1;
        }
      })
      if (count === 0) {
        this.gender_error = true;
      }
      else {
        this.div_first = document.getElementById('form1');
        this.div_second = document.getElementById('div2');
        this.div_third = document.getElementById('div3');
        this.div_fourth = document.getElementById('div4');
        this.div_fifth = document.getElementById('div5');
        this.div_sixth = document.getElementById('div6');
        this.div_seventh = document.getElementById('div7');
        this.div_eight = document.getElementById('div8');
        this.div_ninth = document.getElementById('div9');
        this.div_first.style.display = 'none';
        this.div_second.style.display = 'none';
        this.div_third.style.display = 'none';
        this.div_fourth.style.display = 'none';
        this.div_fifth.style.display = 'none';
        this.div_sixth.style.display = 'none';
        this.div_seventh.style.display = 'none';
        this.div_eight.style.display = 'none';
        this.div_ninth.style.display = 'block';


      }
    }
    else {
      this.gender_error = true;
    }

  }

  // ethnic se skin type pain back
  ethincity_back_skintype() {

    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'block';
    this.div_eight.style.display = 'none';
  }

  // severity of your acne wale see mil,moiderate wala  se 
  continue9() {

    if (this.questionFormgroup9.valid) {
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'block';
    }
    else {
      this.gender_error = true;
    }
    console.log('div9', this.gender_error)
  }

  // severity acne se ethencity back
  acne_back_ethencity() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'block';
    this.div_ninth.style.display = 'none';

  }

  // acne 2 wale se
  continue10() {

    if (this.questionFormgroup10.valid) {
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'block'
    }
    else {
      this.gender_error = true;
    }

  }

  // acne2  se back severity acne1 pai
  acne2_back_acne() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'block';
    this.div_tenth.style.display = 'none';
  }




  // how long acne had
  continue11() {
    if (this.questionFormgroup11.valid) {
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'block'
    }
    else {
      this.gender_error = true;
    }



  }
  // how long se back acne2 tak
  how_long_back_acne2() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'block';
    this.div_eleventh.style.display = 'none';
  }

  // family acne se how much bother tak
  continue12() {
    if (this.questionFormgroup12.valid) {
      console.log('this', this.questionFormgroup12.value)
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_twelveth.style.display = 'none'
      this.div_thirteen.style.display = 'block'

    }
    else  {
      this.gender_error = true;
    }
  }

  // family se back how long
  family_acne_how_long_had() {

    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'block';
    this.div_twelveth.style.display = 'none'

  }

  // acne_bothers se current diet
  continue13() {
    if (this.questionFormgroup13.valid) {
      console.log('this', this.questionFormgroup13.value)
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'block';


    }
    else {
      this.gender_error = true;
    }


  }

  // acne bother se back family acne ko
  acne_bothers_back_family_acne() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_twelveth.style.display = 'block';
    this.div_thirteen.style.display = 'none';
  }



  // current diet  se rate stress level
  continue14() {
    if (this.questionFormgroup14.valid) {
      console.log('this', this.questionFormgroup14.value)
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');


      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'block';

    }
    else {
      this.gender_error = true;
    }
  }

  // current diet se back acne bother
  currentdiet_back_acne_bothers() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'block';
    this.div_fourteen.style.display = 'none'
  }

  // stress level se just few questions
  continue15() {

    this.questionFormgroup15.value.chart_scale = this.gridsize


    // this.questionFormgroup15.patchValue(this.a);


    console.log('this  gfgdf', this.questionFormgroup15.value)

    if (this.questionFormgroup15.valid) {

      console.log('this  ', this.questionFormgroup15.value)

      this.gender_error = false;


      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'block';

    }
    else if (this.questionFormgroup15.invalid) {
      this.gender_error = true;
    }

  }

  // stress level se back current diet
  stress_level_back_current_diet() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'block';
    this.div_fifteen.style.display = 'none';
  }

  // few question se age ka qyues
  continue16() {

    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'block';


  }


  // few meduic ques to back stress level
  medical_ques_back_stress_level() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'block';
    this.div_sixteen.style.display = 'none';
  }

  // used topical subscripytion see oral medication tak
  continue17() {
    if (this.questionFormgroup17.valid) {
      console.log('this', this.questionFormgroup17.value)
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');
      this.div_seventeen = document.getElementById('div17');
      this.div_eighteen = document.getElementById('div18');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'none';
      this.div_seventeen.style.display = 'none';
      this.div_eighteen.style.display = 'block';
    }
    else {
      this.gender_error = true;
    }

  }

  used_topical_subs_back_medic_ques() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'block';
    this.div_seventeen.style.display = 'none';
  }


  // oral medication se
  continue18() {
    if (this.questionFormgroup18.valid) {
      console.log('this', this.questionFormgroup18.value)
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');
      this.div_seventeen = document.getElementById('div17');
      this.div_eighteen = document.getElementById('div18');
      this.div_nineteen = document.getElementById('div19');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'none';
      this.div_seventeen.style.display = 'none';
      this.div_eighteen.style.display = 'none';
      this.div_nineteen.style.display = 'block'
    }
    else {
      this.gender_error = true;
    }
  }

  // oral medication se back topical subs
  oral_medic_back_topical_subs() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'block';
    this.div_eighteen.style.display = 'none';
  }

  // allergic to check_any_medication_take
  continue19() {
    if (this.questionFormgroup19.valid) {
      this.gender_error = false;

      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');
      this.div_seventeen = document.getElementById('div17');
      this.div_eighteen = document.getElementById('div18');
      this.div_nineteen = document.getElementById('div19');
      this.div_twenty = document.getElementById('div20');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'none';
      this.div_seventeen.style.display = 'none';
      this.div_eighteen.style.display = 'none';
      this.div_nineteen.style.display = 'none'
      this.div_twenty.style.display = 'block'


    } else {
      this.gender_error = true;
    }
  }

  // allergic se back to oral medication 
  allergic_back_oral_medication() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');
    this.div_nineteen = document.getElementById('div19');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'none';
    this.div_eighteen.style.display = 'block';
    this.div_nineteen.style.display = 'none';
  }


  // taking any medication se list other medicine

 
  continue20(){
    console.log(this.questionFormgroup20.value) 
     
    if(this.questionFormgroup20.valid){
      this.gender_error = false;
      var count = 0
      Object.keys(this.questionFormgroup20.value).forEach((key: any) => {
        if (this.questionFormgroup20.value[key] !== null) {
          count += 1;
        }
      })
      if (count === 0) {
        this.gender_error = true;
      }
      else{

        console.log('inside valid');

      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');
      this.div_seventeen = document.getElementById('div17');
      this.div_eighteen = document.getElementById('div18');
      this.div_nineteen = document.getElementById('div19');
      this.div_twenty = document.getElementById('div20');
      this.div_twentyone = document.getElementById('div21');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'none';
      this.div_seventeen.style.display = 'none';
      this.div_eighteen.style.display = 'none';
      this.div_nineteen.style.display = 'none';
      this.div_twenty.style.display = 'none';
      this.div_twentyone.style.display = 'block'

      }

    }else {
      console.log('inside invalid');
      this.gender_error = true;
    }
    
   }

  taking_medicine_back_allergic() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');
    this.div_nineteen = document.getElementById('div19');
    this.div_twenty = document.getElementById('div20');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'none';
    this.div_eighteen.style.display = 'none';
    this.div_nineteen.style.display = 'block';
    this.div_twenty.style.display = 'none';
  }

  continue21() {
    if (this.questionFormgroup21.valid) {
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');
      this.div_seventeen = document.getElementById('div17');
      this.div_eighteen = document.getElementById('div18');
      this.div_nineteen = document.getElementById('div19');
      this.div_twenty = document.getElementById('div20');
      this.div_twentyone = document.getElementById('div21');
      this.div_twentytwo = document.getElementById('div22');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'none';
      this.div_seventeen.style.display = 'none';
      this.div_eighteen.style.display = 'none';
      this.div_nineteen.style.display = 'none';
      this.div_twenty.style.display = 'none';
      this.div_twentyone.style.display = 'none';
      this.div_twentytwo.style.display = 'block'
    }else {
      this.gender_error = true;
    }
  }

  list_other_medic_back_taking_any_medic() {
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');
    this.div_nineteen = document.getElementById('div19');
    this.div_twenty = document.getElementById('div20');
    this.div_twentyone = document.getElementById('div21');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'none';
    this.div_eighteen.style.display = 'none';
    this.div_nineteen.style.display = 'none';
    this.div_twenty.style.display = 'block';
    this.div_twentyone.style.display = 'none'
  }

  continue22(){
    console.log(this.questionFormgroup22.value) 
     
    if(this.questionFormgroup22.valid){
      this.gender_error = false;
      var count = 0
      Object.keys(this.questionFormgroup22.value).forEach((key: any) => {
        if (this.questionFormgroup22.value[key] !== null) {
          count += 1;
        }
      })
      if (count === 0) {
        this.gender_error = true;
      }
      else{

        console.log('inside valid');

      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');
      this.div_seventeen = document.getElementById('div17');
      this.div_eighteen = document.getElementById('div18');
      this.div_nineteen = document.getElementById('div19');
      this.div_twenty = document.getElementById('div20');
      this.div_twentyone = document.getElementById('div21');
      this.div_twentytwo = document.getElementById('div22');
      this.div_twentythree = document.getElementById('div23');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'none';
      this.div_seventeen.style.display = 'none';
      this.div_eighteen.style.display = 'none';
      this.div_nineteen.style.display = 'none';
      this.div_twenty.style.display = 'none';
      this.div_twentyone.style.display = 'none';
      this.div_twentytwo.style.display = 'none';
      this.div_twentythree.style.display = 'block';
    
      }

    }else {
      console.log('inside invalid');
      this.gender_error = true;
    } 
  }

  current_use_pro_back_list_other_medic(){
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');
    this.div_nineteen = document.getElementById('div19');
    this.div_twenty = document.getElementById('div20');
    this.div_twentyone = document.getElementById('div21');
    this.div_twentytwo = document.getElementById('div22');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'none';
    this.div_eighteen.style.display = 'none';
    this.div_nineteen.style.display = 'none';
    this.div_twenty.style.display = 'none';
    this.div_twentyone.style.display = 'block';
    this.div_twentytwo.style.display = 'none'
  }

  // additional detail on your skin care routine
  continue23(){
    if (this.questionFormgroup23.valid) {
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');
      this.div_seventeen = document.getElementById('div17');
      this.div_eighteen = document.getElementById('div18');
      this.div_nineteen = document.getElementById('div19');
      this.div_twenty = document.getElementById('div20');
      this.div_twentyone = document.getElementById('div21');
      this.div_twentytwo = document.getElementById('div22');
      this.div_twentythree = document.getElementById('div23');
      this.div_twentyfour = document.getElementById('div24');


      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'none';
      this.div_seventeen.style.display = 'none';
      this.div_eighteen.style.display = 'none';
      this.div_nineteen.style.display = 'none';
      this.div_twenty.style.display = 'none';
      this.div_twentyone.style.display = 'none';
      this.div_twentytwo.style.display = 'none'
      this.div_twentythree.style.display = 'none';
      this.div_twentyfour.style.display = 'block';


    }else {
      this.gender_error = true;
    }
  }

  additional_detail_back_current_use_pro(){
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');
    this.div_nineteen = document.getElementById('div19');
    this.div_twenty = document.getElementById('div20');
    this.div_twentyone = document.getElementById('div21');
    this.div_twentytwo = document.getElementById('div22');
    this.div_twentythree = document.getElementById('div23');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'none';
    this.div_eighteen.style.display = 'none';
    this.div_nineteen.style.display = 'none';
    this.div_twenty.style.display = 'none';
    this.div_twentyone.style.display = 'none';
    this.div_twentytwo.style.display = 'block'
    this.div_twentythree.style.display = 'none'
  }

  // pregnent to 
  continue24(){
    if (this.questionFormgroup24.valid) {
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');
      this.div_seventeen = document.getElementById('div17');
      this.div_eighteen = document.getElementById('div18');
      this.div_nineteen = document.getElementById('div19');
      this.div_twenty = document.getElementById('div20');
      this.div_twentyone = document.getElementById('div21');
      this.div_twentytwo = document.getElementById('div22');
      this.div_twentythree = document.getElementById('div23');
      this.div_twentyfour = document.getElementById('div24');
      this.div_twentyfive = document.getElementById('div25');


      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'none';
      this.div_seventeen.style.display = 'none';
      this.div_eighteen.style.display = 'none';
      this.div_nineteen.style.display = 'none';
      this.div_twenty.style.display = 'none';
      this.div_twentyone.style.display = 'none';
      this.div_twentytwo.style.display = 'none'
      this.div_twentythree.style.display = 'none';
      this.div_twentyfour.style.display = 'none';
      this.div_twentyfive.style.display = 'block';


    }else {
      this.gender_error = true;
    }
  }

  // preg se back addition.. detail
  preg_back_add_detail(){
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');
    this.div_nineteen = document.getElementById('div19');
    this.div_twenty = document.getElementById('div20');
    this.div_twentyone = document.getElementById('div21');
    this.div_twentytwo = document.getElementById('div22');
    this.div_twentythree = document.getElementById('div23');
    this.div_twentyfour = document.getElementById('div24');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'none';
    this.div_eighteen.style.display = 'none';
    this.div_nineteen.style.display = 'none';
    this.div_twenty.style.display = 'none';
    this.div_twentyone.style.display = 'none';
    this.div_twentytwo.style.display = 'none';
    this.div_twentythree.style.display = 'block';
    this.div_twentyfour.style.display = 'none';
  }

  // are you breastfeeding
  continue25(){
    if (this.questionFormgroup25.valid) {
      this.gender_error = false;
      this.div_first = document.getElementById('form1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_fifth = document.getElementById('div5');
      this.div_sixth = document.getElementById('div6');
      this.div_seventh = document.getElementById('div7');
      this.div_eight = document.getElementById('div8');
      this.div_ninth = document.getElementById('div9');
      this.div_tenth = document.getElementById('div10');
      this.div_eleventh = document.getElementById('div11');
      this.div_twelveth = document.getElementById('div12');
      this.div_thirteen = document.getElementById('div13');
      this.div_fourteen = document.getElementById('div14');
      this.div_fifteen = document.getElementById('div15');
      this.div_sixteen = document.getElementById('div16');
      this.div_seventeen = document.getElementById('div17');
      this.div_eighteen = document.getElementById('div18');
      this.div_nineteen = document.getElementById('div19');
      this.div_twenty = document.getElementById('div20');
      this.div_twentyone = document.getElementById('div21');
      this.div_twentytwo = document.getElementById('div22');
      this.div_twentythree = document.getElementById('div23');
      this.div_twentyfour = document.getElementById('div24');
      this.div_twentyfive = document.getElementById('div25');
      this.div_twentysix = document.getElementById('div26');

      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'none';
      this.div_fifth.style.display = 'none';
      this.div_sixth.style.display = 'none';
      this.div_seventh.style.display = 'none';
      this.div_eight.style.display = 'none';
      this.div_ninth.style.display = 'none';
      this.div_tenth.style.display = 'none';
      this.div_eleventh.style.display = 'none';
      this.div_twelveth.style.display = 'none';
      this.div_thirteen.style.display = 'none';
      this.div_fourteen.style.display = 'none';
      this.div_fifteen.style.display = 'none';
      this.div_sixteen.style.display = 'none';
      this.div_seventeen.style.display = 'none';
      this.div_eighteen.style.display = 'none';
      this.div_nineteen.style.display = 'none';
      this.div_twenty.style.display = 'none';
      this.div_twentyone.style.display = 'none';
      this.div_twentytwo.style.display = 'none'
      this.div_twentythree.style.display = 'none';
      this.div_twentyfour.style.display = 'none';
      this.div_twentyfive.style.display = 'none';
      this.div_twentysix.style.display = 'block';

    }else {
      this.gender_error = true;
    }
  }
  b_feed_back_preg(){
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');
    this.div_nineteen = document.getElementById('div19');
    this.div_twenty = document.getElementById('div20');
    this.div_twentyone = document.getElementById('div21');
    this.div_twentytwo = document.getElementById('div22');
    this.div_twentythree = document.getElementById('div23');
    this.div_twentyfour = document.getElementById('div24');
    this.div_twentyfive = document.getElementById('div25');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'none';
    this.div_eighteen.style.display = 'none';
    this.div_nineteen.style.display = 'none';
    this.div_twenty.style.display = 'none';
    this.div_twentyone.style.display = 'none';
    this.div_twentytwo.style.display = 'none';
    this.div_twentythree.style.display = 'none';
    this.div_twentyfour.style.display = 'block';
    this.div_twentyfive.style.display = 'none';

  }



// taking pills
continue26(){
  if (this.questionFormgroup26.valid) {
    this.gender_error = false;
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');
    this.div_nineteen = document.getElementById('div19');
    this.div_twenty = document.getElementById('div20');
    this.div_twentyone = document.getElementById('div21');
    this.div_twentytwo = document.getElementById('div22');
    this.div_twentythree = document.getElementById('div23');
    this.div_twentyfour = document.getElementById('div24');
    this.div_twentyfive = document.getElementById('div25');
    this.div_twentysix = document.getElementById('div26');
 


    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'none';
    this.div_eighteen.style.display = 'none';
    this.div_nineteen.style.display = 'none';
    this.div_twenty.style.display = 'none';
    this.div_twentyone.style.display = 'none';
    this.div_twentytwo.style.display = 'none'
    this.div_twentythree.style.display = 'none';
    this.div_twentyfour.style.display = 'none';
    this.div_twentyfive.style.display = 'none';
    this.div_twentysix.style.display = 'none';
    this.router.navigate(['/skincareplan']);

  }else {
    this.gender_error = true;
  }
}
  pils_back_b_feed(){
    this.div_first = document.getElementById('form1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');
    this.div_sixth = document.getElementById('div6');
    this.div_seventh = document.getElementById('div7');
    this.div_eight = document.getElementById('div8');
    this.div_ninth = document.getElementById('div9');
    this.div_tenth = document.getElementById('div10');
    this.div_eleventh = document.getElementById('div11');
    this.div_twelveth = document.getElementById('div12');
    this.div_thirteen = document.getElementById('div13');
    this.div_fourteen = document.getElementById('div14');
    this.div_fifteen = document.getElementById('div15');
    this.div_sixteen = document.getElementById('div16');
    this.div_seventeen = document.getElementById('div17');
    this.div_eighteen = document.getElementById('div18');
    this.div_nineteen = document.getElementById('div19');
    this.div_twenty = document.getElementById('div20');
    this.div_twentyone = document.getElementById('div21');
    this.div_twentytwo = document.getElementById('div22');
    this.div_twentythree = document.getElementById('div23');
    this.div_twentyfour = document.getElementById('div24');
    this.div_twentyfive = document.getElementById('div25');
    this.div_twentysix = document.getElementById('div26');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'none';
    this.div_fifth.style.display = 'none';
    this.div_sixth.style.display = 'none';
    this.div_seventh.style.display = 'none';
    this.div_eight.style.display = 'none';
    this.div_ninth.style.display = 'none';
    this.div_tenth.style.display = 'none';
    this.div_eleventh.style.display = 'none';
    this.div_twelveth.style.display = 'none';
    this.div_thirteen.style.display = 'none';
    this.div_fourteen.style.display = 'none';
    this.div_fifteen.style.display = 'none';
    this.div_sixteen.style.display = 'none';
    this.div_seventeen.style.display = 'none';
    this.div_eighteen.style.display = 'none';
    this.div_nineteen.style.display = 'none';
    this.div_twenty.style.display = 'none';
    this.div_twentyone.style.display = 'none';
    this.div_twentytwo.style.display = 'none';
    this.div_twentythree.style.display = 'none';
    this.div_twentyfour.style.display = 'none';
    this.div_twentyfive.style.display = 'block';
    this.div_twentysix.style.display = 'none';

  }




  


  get qFormControls() {

    return this.questionFormgroup.controls

  }
  get qFormControls2() {

    return this.questionFormgroup2.controls

  }
  get qFormControls4() {

    return this.questionFormgroup4.controls

  }



  // range 1
  range_1(argguments: any) {

    alert(argguments)
    this.a = argguments

  }


}
