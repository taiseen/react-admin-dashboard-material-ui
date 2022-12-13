> 17 Nov 2022

# React Admin Dashboard | [Live Link][hostedLink]


## Technology used
1. React
2. Material UI 
3. Formik
4. Yup
5. Nivo chart
6. Full-calendar
7. React-Pro-Sidebar



### This application consists of 
* Light & Dark Mode
* Dashboard Summary
* 3 Different Data Table Pages
* User Input Form Page  
* Calendar Integration
* FAQ Page
* 4 Different Charts



## Learning Context
* ...spread operator + conditional base object property loading at theme level
* introduce with css tool ==> [Pesticide][link]
* by array of object{text,icon}, construct side-menu
* row-column material-ui layout data display...
* usage of `data-grid` layout of `material ui`...
* path name become selected menu item, after refresh also...
* user input form validation `yup` checking...
* phone number regex pattern from input string...
* usage of `react-pro-sidebar@0.7.1` with its `css`...
* usage of `full-calendar` library...
* usage of `nivo chart` system...
* migrate experience from Vite to React, 
    * because Vite have some issus with full-calendar lib...



## Yarn base packages/lib...
|No | Packages Name                    | Description      |
|---|----------------------------------|------------------|
|01 |yarn add `react-router-dom`       | URL Navigation   |
|02 |yarn add `react-pro-sidebar@0.7.1`| React Pro Sidebar|
|03 |yarn add `formik`                 | Form Elements    |
|04 |yarn add `yup`                    | Form Validations |
|05 |yarn add `@mui/material`          | [Material UI][mui] |
|06 |yarn add `@emotion/react`         | [Material UI][mui] |
|07 |yarn add `@emotion/styled`        | [Material UI][mui] |
|08 |yarn add `@emotion/styled`        | [Material UI][mui] |
|09 |yarn add `@mui/x-data-grid`       | [Material UI][mui] |
|10 |yarn add `@mui/icons-material`    | [Material UI][mui] |
|11 |yarn add `@fullcalendar/core`       | [Full Calendar][📆] 📆 |
|12 |yarn add `@fullcalendar/daygrid`    | [Full Calendar][📆] 📆 |
|13 |yarn add `@fullcalendar/timegrid`   | [Full Calendar][📆] 📆 |
|14 |yarn add `@fullcalendar/list`       | [Full Calendar][📆] 📆 |
|15 |yarn add `@fullcalendar/interaction`| [Full Calendar][📆] 📆 |
|16 |yarn add `@fullcalendar/react`      | [Full Calendar][📆] 📆 |
|17 |yarn add `@nivo/core`             | [Nivo Chart][📈] 📈 |
|18 |yarn add `@nivo/pie`              | [Nivo Chart][📈] 📈 |
|19 |yarn add `@nivo/bar`              | [Nivo Chart][📈] 📈 |
|20 |yarn add `@nivo/line`             | [Nivo Chart][📈] 📈 |
|21 |yarn add `@nivo/geo`              | [Nivo Chart][📈] 📈 |

<br />

## File & Folder Hierarchy

```
🟨
src
├── components
|   ├── BarChart.jsx
|   ├── GeographyChart.jsx
|   ├── Header.jsx
|   ├── index.js
|   ├── LineChart.jsx
|   ├── PieChart.jsx
|   ├── ProgressCircle.jsx
|   └── StatBox.jsx
|
├── constants
|   ├── contactsColumns.js
|   ├── faq.js
|   ├── inputFormFields.js
|   ├── inputFormValues.js
|   ├── invoicesColumns.js
|   ├── mockData.js
|   ├── mockGeoFeatures.js
|   ├── sidebarMenu.js
|   └── teamColumns.js
|
├── pages
|   |   Dashboard.jsx
|   |   index.js
|   |
|   ├── charts
|   |   ├── Bar.jsx
|   |   ├── Geography.jsx
|   |   ├── Line.jsx
|   |   └── Pie.jsx
|   |
|   ├── global
|   |   ├── SidebarMenu.jsx
|   |   ├── SidebarMenuItem.jsx
|   |   └── Topbar.jsx
|   |
|   ├── info
|   |   ├── Contacts.jsx
|   |   ├── Invoices.jsx
|   |   └── Team.jsx
|   |
|   └── inputs
|       ├── Calendars.jsx
|       ├── FAQ.jsx
|       └── InputForm.jsx
|
├── styles
|   ├── index.css
|   └── theme.js
|
├── App.jsx
└── index.js
🟨
```

```
tree /f
```


[📈]: https://nivo.rocks
[📆]: https://fullcalendar.io
[hostedLink]: https://react-adb-mui.netlify.app
[mui]: https://mui.com/material-ui/getting-started/installation
[link]: https://chrome.google.com/webstore/detail/pesticide-for-chrome/bakpbgckdnepkmkeaiomhmfcnejndkbi

<!-- 
https://youtu.be/EBCdyQ_HFMo 
-->