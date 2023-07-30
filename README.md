# SinglePageWeb-AngularJs
# Single Page Web Applications with AngularJS
<!DOCTYPE html>
<html ng-app="ShoppingListCheckOff">
  <head>
    <title>Shopping List Check Off</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div ng-controller="ShoppingListCheckOffController">
      <h1>Shopping List Check Off</h1>
      <div class="list">
        <h2>To Buy</h2>
        <ul>
          <li ng-repeat="item in toBuyItems">
            { item.name } ({ item.quantity })
            <button ng-click="buyItem(item)">Bought</button>
            <br />
            { item.name } ({ item.quantity })
            <button ng-click="buyItem(item)">Bought</button>
            <br />
            { item.name } ({ item.quantity })
            <button ng-click="buyItem(item)">Bought</button>
          </li>
        </ul>
      </div>
      <div class="list">
        <h2>Already Bought</h2>
        <ul>
          <li ng-repeat="item in alreadyBoughtItems">
            {{ item.name }} ({{ item.quantity }})
          </li>
        </ul>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.2/angular.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>

.list {
  margin-bottom: 30px;
}

h2 {
  margin-top: 0;
  color: red;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}
