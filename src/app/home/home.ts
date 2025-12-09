import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule, FormsModule],
})
export class Home {
  selectedRows: any[] = [];
  list = [
    { "_id": 1, "mispar_mosah": 16, "shem_mosah": "נירים מוסך הקבוץ", "cod_sug_mosah": 6, "sug_mosah": "מוסך מורשה", "ktovet": "ד.נ. הנגב", "yishuv": "נירים", "telephone": "054-7916219", "mikud": 85125, "cod_miktzoa": 10, "miktzoa": "מכונאות רכב בנזין", "menahel_miktzoa": "אליהו ציון", "rasham_havarot": 570005926, "TESTIME": "" },
    { "_id": 2, "mispar_mosah": 16, "shem_mosah": "נירים מוסך הקבוץ", "cod_sug_mosah": 6, "sug_mosah": "מוסך מורשה", "ktovet": "ד.נ. הנגב", "yishuv": "נירים", "telephone": "054-7916219", "mikud": 85125, "cod_miktzoa": 20, "miktzoa": "מכונאות רכב דיזל", "menahel_miktzoa": "אליהו ציון", "rasham_havarot": 570005926, "TESTIME": "" },
    { "_id": 3, "mispar_mosah": 16, "shem_mosah": "נירים מוסך הקבוץ", "cod_sug_mosah": 6, "sug_mosah": "מוסך מורשה", "ktovet": "ד.נ. הנגב", "yishuv": "נירים", "telephone": "054-7916219", "mikud": 85125, "cod_miktzoa": 190, "miktzoa": "טרקטורים ומכונות ניידות", "menahel_miktzoa": "אליהו ציון", "rasham_havarot": 570005926, "TESTIME": "" },
    { "_id": 4, "mispar_mosah": 16, "shem_mosah": "נירים מוסך הקבוץ", "cod_sug_mosah": 6, "sug_mosah": "מוסך מורשה", "ktovet": "ד.נ. הנגב", "yishuv": "נירים", "telephone": "054-7916219", "mikud": 85125, "cod_miktzoa": 194, "miktzoa": "תיקון מלגזות הרמה", "menahel_miktzoa": "אליהו ציון", "rasham_havarot": 570005926, "TESTIME": "" },
    { "_id": 5, "mispar_mosah": 23, "shem_mosah": "קבוץ רביבים", "cod_sug_mosah": 6, "sug_mosah": "מוסך מורשה", "ktovet": "ד.נ. חלוצה", "yishuv": "רביבים", "telephone": "08-6562541", "mikud": 85515, "cod_miktzoa": 10, "miktzoa": "מכונאות רכב בנזין", "menahel_miktzoa": "בן יוסף יאיר", "rasham_havarot": 57000358, "TESTIME": "" }]

  displayedColumns = ['select', '_id', 'shem_mosah', 'miktzoa', 'yishuv', 'telephone'];

  selectRow(event: any, row: any) {
    if (event.checked) {
      this.selectedRows.push(row);
    }
    else {
      const index = this.selectedRows.indexOf(row);
      if (index >= 0) {
        this.selectedRows.splice(index, 1);
      }
    }
  }

  removeAll() {
    this.selectedRows = [];
  }

  isSelected(row: any): boolean {
    return this.selectedRows.includes(row);
  }

  selectAll() {
    this.selectedRows = [...this.list]; // בחר את כל השורות
  }

  addSelectedToTable() {
    if (this.selectedRows = []) {
      alert("לא נבחרו שורות כלל");
      return;
    }
    // כאן תוכל להוסיף את הלוגיקה שלך לעיבוד השורות שנבחרו
    console.log(this.selectedRows);
  }
}


