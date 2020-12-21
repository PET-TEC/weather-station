import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';
import { PresentService } from 'src/app/utils/present.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user: User;
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private util: PresentService
  ) {
    this.user = new User();
  }

  ionViewWillEnter() {
    // tslint:disable-next-line: radix
    this.user.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.user.id).subscribe(
      (response: User) => {
        this.user = response;
      }
    );
  }

  update() {
    this.userService.putUser(this.user).subscribe(
      (response) => {
        this.util.presentAlert('Sucesso', 'Perfil atualizado com sucesso!');
      }, (error) => {
        console.log('ERR from update Perfil:', error);
      }
    );
  }

  ngOnInit() {
  }

}
