import { Component } from '@angular/core';
import {Server} from "./server";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
//By Vidhi Kalal ,991706094
@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgStyle
  ],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  servers: Server[] = [];//array for the server inputs
  newServerName: string = '';
  newServerStatus: string = '';
  newServerId:number=0;
  errorMessage='';

  onAddServer() {//function for taking user input when user clicks on add server button
  if (this.servers.find(server => server.serverId === this.newServerId)) {
    this.errorMessage = 'Server ID already exists. Please enter a unique ID.';
    return;}

    const newServer = new Server(this.newServerName, this.newServerId,this.newServerStatus);
    this.servers.push(newServer);//adding to array
    this.newServerName = '';
    this.newServerId=0;
    this.newServerStatus = '';
    this.errorMessage='';

  }
  getServerSummary(): string {//function for getting summary of total servers and number of online and offline servers
    const totalServers = this.servers.length;
    const onlineServers = this.servers.filter(server => server.serverStatus === 'online').length;
    const offlineServers = totalServers - onlineServers;
    return `Total Servers: ${totalServers}\nOnline: ${onlineServers}\nOffline: ${offlineServers}`;
  }
}
