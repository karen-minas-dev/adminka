import { Component, OnInit, ElementRef } from '@angular/core';
import { RestService} from '../../services/rest.service';
declare var jQuery:any;

@Component({
  selector: 'app-map-visitors-report',
  templateUrl: './map-visitors-report.component.html',
  styleUrls: ['./map-visitors-report.component.css']
})
export class MapVisitorsReportComponent implements OnInit {

  markers: Array<any>;
  userscount;

  constructor(private elementRef: ElementRef, private rest: RestService) { }

  ngOnInit() {


    this.userscount = [{ title: null, count: 0},{ title: null, count: 0},{ title: null, count: 0}];
    this.rest.getMapVisitors().subscribe(usersStatus => {

      this.userscount[0].title = 'Online Users';
      this.userscount[0].count = usersStatus.onlineUsersCount.length;
      this.userscount[1].title = 'Ofline Users';
      this.userscount[1].count = usersStatus.offlineUsersCount.length;
      this.userscount[2].title = 'All Users';
      this.userscount[2].count = usersStatus.offlineUsersCount.length + usersStatus.onlineUsersCount.length;

      this.markers = usersStatus.onlineUsersCount;      
       jQuery('#world-map-markers').vectorMap({
         map: 'world_mill_en',
         normalizeFunction: 'polynomial',
         hoverOpacity: 0.7,
         hoverColor: false,
         backgroundColor: 'transparent',
         regionStyle: {
           initial: {
             fill: 'rgba(210, 214, 222, 1)',
             "fill-opacity": 1,
             stroke: 'none',
             "stroke-width": 0,
             "stroke-opacity": 1
           },
           hover: {
             "fill-opacity": 0.7,
             cursor: 'pointer'
           },
           selected: {
             fill: 'yellow'
           },
           selectedHover: {}
         },
         markerStyle: {
           initial: {
             fill: '#00a65a',
             stroke: '#111'
           }
         },

         markers: this.markers,
       });
    },
    err =>   console.log("err")
    );

  }

}
