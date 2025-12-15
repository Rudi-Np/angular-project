import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class Home implements OnInit {

  displayedColumns = [
  'select',
  'id',
  'shemMosah',
  'miktzoa',
  'yishuv',
  'telephone'
];


  dataSource = new MatTableDataSource<any>([]);
  selectedRows: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.http
      .get<any[]>('http://localhost:5110/api/Home/GetApiAndSave')
      .subscribe(res => {
        this.dataSource.data = res; // ⭐ קריטי!
      });
  }

  selectRow(event: any, row: any) {
    if (event.checked) {
      this.selectedRows.push(row);
    } else {
      this.selectedRows = this.selectedRows.filter(r => r !== row);
    }
  }

  selectAll() {
    this.selectedRows = [...this.dataSource.data];
  }

  removeAll() {
    this.selectedRows = [];
  }

  isSelected(row: any): boolean {
    return this.selectedRows.includes(row);
  }

  addSelectedToTable() {
    if (this.selectedRows.length === 0) {
      alert('לא נבחרו שורות');
      return;
    }
    console.log(this.selectedRows);
  }
}
