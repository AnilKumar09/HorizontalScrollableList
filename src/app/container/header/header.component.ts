import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    @HostBinding('class.ui')
    @HostBinding('class.masthead')
    @HostBinding('class.vertical')
    @HostBinding('class.segment')
    public classes = true;
  constructor() { }

  ngOnInit(): void {
  }

}
