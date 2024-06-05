const accountId = 121212;
let accountEmail = "anand@google.com";
var accountPassword = "12345";
accountCity = "Hyderabad";
let accountState;

// accountId = 2;  // not allowed

accountEmail = "anad@g.com"
accountPassword = "2121"
accountCity = "Mumbai"

console.log(accountId);

/*Prefer not to use var
because of issue in block scopr and functional scrop
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);