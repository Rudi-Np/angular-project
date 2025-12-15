# Angular + .NET Web API – Garages Project

## 📌 תיאור כללי

פרויקט Full‑Stack הכולל:

* **צד שרת**: Web API ב־ASP.NET Core
* **צד לקוח**: Angular (Standalone Components) עם Angular Material

המערכת שולפת נתוני מוסכים מ־API ממשלתי, שומרת אותם במסד נתונים, ומציגה אותם בטבלה אינטראקטיבית בצד הלקוח.

---

## 🖥️ צד שרת – Backend (.NET Core)

### טכנולוגיות

* ASP.NET Core Web API
* HttpClient
* פעולות אסינכרוניות (`async / await`)
* מסד נתונים (לפי המימוש בפרויקט)

### יכולות עיקריות

* שליפת נתוני מוסכים מ־API ממשלתי:

  ```
  https://data.gov.il/api/3/action/datastore_search
  ```
* שמירת הנתונים במסד הנתונים
* החזרת הנתונים ל־Client
* הוספת מוסכים חדשים דרך Endpoint ייעודי

### נקודות קצה לדוגמה

* `GET /api/Home/GetApiAndSave`
* `POST /api/Home/Add`

השרת רץ בכתובת:

```
http://localhost:5110
```

---

## 🌐 צד לקוח – Frontend (Angular)

### טכנולוגיות

* Angular (Standalone Components)
* Angular Material
* HttpClient
* TypeScript

### יכולות עיקריות

* קריאה ל־Web API
* הצגת נתונים בטבלת Angular Material
* בחירת שורות עם Checkbox
* פעולות על רשומות נבחרות

### רכיב מרכזי

* `HomeComponent`

  * מציג טבלת מוסכים
  * מבצע קריאה ל־API ב־`ngOnInit`

---

## ▶️ הרצה מקומית

### Backend

```bash
dotnet run
```

### Frontend

```bash
npm install
ng serve
```

גישה ל־Client:

```
http://localhost:4200
```

---

## 📂 מבנה פרויקט (בקצרה)

```
Backend/
 └── Controllers/
 └── Models/
 └── Services/

Frontend/
 └── src/app/
     └── home/
     └── app-root
```

---

## 📝 הערות

* כל פעולות ה־DB מבוצעות בצורה אסינכרונית
* הקוד כתוב בצורה מודולרית וניתנת להרחבה
* מתאים לפרויקט לימודי / מבחן בית / תרגול Full‑Stack

---

## 👤 מחבר

Rudi
