import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from './dialog/dialog.component';
import { ThemeService } from './theme.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// let ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // displayedColumns: string[] = [
  //   'demo-position',
  //   'demo-name',
  //   'demo-weight',
  //   'demo-symbol',
  // ];
  // dataSource = ELEMENT_DATA;
  title = 'Implement-Light-Dark-Mode-Using-Sass';
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  isDark: boolean;

  constructor(
    private themeService: ThemeService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.themeService.initTheme();
    this.isDark = this.themeService.isDarkMode();
  }

  ngOnInit(): void {}

  toggleDarkMode(theme: any) {
    // this.isDark = this.themeService.isDarkMode();
    // this.isDark
    //   ? this.themeService.update('theme-light')
    //   : this.themeService.update('theme-dark');
    // ----------------------------------------------------
    switch (theme) {
      case 'light':
        document.body.setAttribute('theme', 'light');
        localStorage.setItem('default-theme', 'light');
        break;
      case 'dark':
        document.body.setAttribute('theme', 'dark');
        localStorage.setItem('default-theme', 'dark');
        break;
      case 'auto':
        document.body.removeAttribute('theme');
        localStorage.removeItem('default-theme');
        break;
      default:
        break;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log(`Dialog closed`);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
