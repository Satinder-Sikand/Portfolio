import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('200ms ease-out', 
                    style({ height: 400, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 400, opacity: 1 }),
            animate('200ms ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HomeComponent {
  learnMore: boolean = false;

  toggleLearnMore(): void {
    this.learnMore = !this.learnMore;
  }
  getLearnMore(): boolean {
    return this.learnMore;
  } 
  companies = [{
      "name": "Amazon (AWS)",
      "position": "SDE Intern",
      "src": "./assets/Pictures/aws-logo.png",
      "desc": "I interned at AWS as part of the snow org from May-Aug 2022. It was definetly very different from all my other experiences as this was"
      +"less work in a team to help develop and maintain a tech solution, and more develop your own tech solution that helps the team. I was exposed to"+
      "and really learned a lot about AWS and it's different technologies, and how to make them interact with each other. In essense, I built an internal data"
      +" lake that users (within the org) could query in order to make improved data-driven decisions and operate efficiently."
    },
    {"name": "CaseWare International",
      "position": "Software Developer Intern",
      "src": "./assets/Pictures/CWI-logo.png",
      "desc": "This was my second internship with CaseWare International, this time as a front-end software developer. I really loved my time at CaseWare"+
      " (as you can probably tell), and learned a lot from this internship too. Unfortunately this was a remote internship, but that didn't stop the team from having " + 
      "in-person get-togethers. I worked with JavaScript/TypeScript and the AngularJS framework, developing software that allowed customers to develop custom tax forms."
    },
    {"name": "CaseWare International",
      "position": "Application Security Tester Intern",
      "src": "./assets/Pictures/CWI-logo.png",
      "desc": "This internship was between Jan-Aug 2021, where I assisted the CaseWare International Security team in testing and maintaining the "+
      "security of CaseWare products. I learned a lot from this internship such as the OWASP top 10, different security measures to take, and just how "+
      "vulnerable applications can really be. I worked with multiple SAST and DAST tools, developed custom queries detecting new threats, and removed many "+
      "false positives."
    },
    {"name": "Deutsche Telekom",
      "position": "Developer Intern",
      "src": "./assets/Pictures/dt-logo.png",
      "desc": "This internship was between Jun-Aug 2019, where I worked with a team on the development of Deutsche Telekom software, utilizing user logs from Kibana to "+
      "recreate the users journey on their Deutsche Telekom app. This was my first ever co-op/internship and I was very excited for it."+
      "It really taught me that studying in a university and actually doing the job are two different things. At this poing we were never taught frameworks, how"+
      " the front and back communicate, front end designs, security features, and so on. We used Java and Angular as our tech stack. "
    }
  ]

  projects = [
    {
      "link": "https://github.com/LassondeCapstoneGroup20/LassondeProjectsInventory",
      "name": "Lassonde Projects Inventory",
      "desc": "This was a project that was created on behlaf of the Lassonde capstone team. It is a Django web app that allows Capstone coordinators to "+
                "efficiently manage their project inventory, students, and supervirsors through intuitive CRUD operations and filter/search functions.",
      "iclass": "fa-database"
    },
    {
      "link": "https://github.com/Satinder-Sikand/Zip-Editor",
      "name": "Zip File Editor",
      "desc": "This is a Python based project which can be used to manipulate zip files to test out decompression code. This includes zip bombs, buffer overflow and more. "+
              "I came up with this after I faced difficulty in testing security features regarding the decompression of zip files. It should be used responsibly.",
      "iclass": "fa-file-archive"
    },
    {
      "link": "https://github.com/Satinder-Sikand/2311Project",
      "name": "Talkbot Simulator",
      "desc": "This was a Java project that serves as an assistive communivation tool for those that face difficulty in speaking to others. Users"+
              " interact with the program by clicking on buttons representing speficic sentences, phrases, and customizable messages. Users can also add/remove and customize buttons according to their communications needs.",
      "iclass": "fa-smile"
    }
  ]

}
