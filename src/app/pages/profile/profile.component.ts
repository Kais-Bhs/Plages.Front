import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { AuthService } from '../../_services/auth.service';
import { ClientService } from '../../_services/client.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any; // Déclarer une variable pour stocker les données de l'utilisateur
  clientId: number | null = null;
  constructor(private userService: ClientService) { } // Injecter le service UserService

  ngOnInit(): void {
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
      this.clientId = parseInt(clientId, 10);
      this.getUserProfile();
    } else {
      console.error('ID du client non disponible');
    }
  }

  getUserProfile() {
    this.userService.getUser(this.clientId).subscribe(
      (data: any) => {
        this.currentUser = data; // Affecter les données de l'utilisateur à la variable currentUser
      },
      (error: any) => {
        console.log('Erreur lors de la récupération du profil utilisateur:', error);
      }
    );
  }
}