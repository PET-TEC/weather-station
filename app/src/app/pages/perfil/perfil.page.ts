import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user: User;
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
  ) {
    this.user = new User();
  }

  ionViewWillEnter() {
    // tslint:disable-next-line: radix
    this.user.id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.user.id = 1;
    this.getUser();
  }

  getUser() {
    this.userService.getUserById(this.user.id).subscribe(
      (response: User) => {
        this.user = response;
      }
    );
  }

  ngOnInit() {
  }

}
