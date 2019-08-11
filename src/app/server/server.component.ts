import { Component } from '@angular/core';


@Component({
    selector: 'server-abs',
    templateUrl: './server.component.html'
})

export class ServerComponent {
 serverId : number = 10;
 serverStatus : string = 'offline';

  getServerStatus(){
    return this.serverStatus;
 }
}