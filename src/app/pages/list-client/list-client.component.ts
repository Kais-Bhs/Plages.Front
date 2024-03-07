import { Component } from '@angular/core';
import { User } from '../../Models/user.model';
import { AuthService } from '../../_services/auth.service';
import { ClientService } from '../../_services/client.service';
import { ERole } from '../../Models/ERole';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.css'
})
export class ListClientComponent {
  users: User[] = [];
  clientId: number | null = null;

  constructor(
    private authService: AuthService,private clientService : ClientService
  ) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
      this.clientService.getAllUsers(ERole.ROLE_USER).subscribe(users => {
        this.users = users;
      });

  }
}
