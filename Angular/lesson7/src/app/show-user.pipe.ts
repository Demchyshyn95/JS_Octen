import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from './user';

@Pipe({
  name: 'showUser'
})
export class ShowUserPipe implements PipeTransform {

  transform(allUsers: IUser[]): any {
     let users = '';
     allUsers.forEach((user) => {
       users +=  `<div>
                      <h2>${user.id} - <ins>${user.name}</<ins></h2>
                      <p>phone - ${user.phone} , <em>${user.email}</em> </p>
                      </div>`;
     });
     return users;
  }
}
