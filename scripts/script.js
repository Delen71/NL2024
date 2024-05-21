angular.module('myApp', [])

  .controller('MainCtrl', function ($scope, $http) {

    // FUNCTIONS

    $scope.label = config.label;

    $scope.id = '';
    $scope.product = '';
    $scope.barcode = '';
    $scope.weight = '';
    $scope.printerMappings = '';
    $scope.replacementImagePath = '..\\Graphics';
    $scope.resave = true;
    $scope.overrideImagePath = true;

    const txtContent = ["Barcode labelling in the cloud? Fortune cookie says: 'Scan the skies for software that sticks like a label!' 🌩️☁️", "Barcode labelling in the cloud? Fortune cookie says: 'Unlock the secret code to labelling success! Let software be your guiding light in the cloud!  🌩️ 🍪🔒", "Looking for a barcode labelling solution that's as sweet as a fortune cookie? 🍪🌩️ Look no further! With Loftware software in the cloud, you can label your products with ease and style. 🌟💻 Say goodbye to labelling headaches and hello to barcode bliss!", "Looking for a barcode labelling solution that's as sweet as a fortune cookie? 🍪🌩️ Look no further! With Loftware software in the cloud, you can label your products with ease and style. 🍀🌥️", "Barcode labelling got me feeling like a fortune cookie! 🌩️☁️ With Loftware software in the cloud, I'm labelling with love! 💖 Let's scan some smiles and spread the barcode magic! ", "Barcode labelling got me feeling cloud nine! 😄✨ With Loftware software in the cloud, my love for labelling is sky high!  🌤️💕", "Love is like a barcode label, it sticks with you wherever you go! 😍💕 Thanks to Loftware Cloud software, labelling has never been sweeter!  🌩️", "Labelling love with Loftware Cloud software! 😍💻 Let's barcode our way to a sweet future! ", "Barcode labelling got me feeling like a fortune cookie! 🍪✨ With Loftware Cloud software, I'm spreading love and labels everywhere! 💕🏷️ Who needs luck when you've got #LoftwareLove? ", "Labelling love with Loftware Cloud software! 🌩️💕 Let barcode labelling be the fortune in your cookie. Embrace the cloud and watch your labelling soar to new heights! ", "Looking for some barcode labelling wisdom? Let the fortune cookie guide you! 🌟 With Loftware Cloud software, you'll find love in every label. ", "Looking for some barcode labelling wisdom? 🤔 Loftware Cloud software has got you covered! 🌩️ Get your labels printed with ease and accuracy and unlock the secret to getting that sweet commission! ", "Looking for some barcode labelling wisdom? Look no further! With Loftware Cloud software, you'll be on the path to fortune and commission!  🌟💰", "Looking for some barcode labelling wisdom? 🌟 Look no further! With Loftware Cloud software, you'll be labelling like a pro in no time! 🏷️💡 Let your fortune cookie guide you to seamless label printing and a single source of truth.", "Looking for some barcode labelling wisdom? 🌟 Use Loftware Cloud software and unlock the secrets of efficient labelling! 🏷️💡 Let your labels shine like a fortune cookie message, guiding your business to success!", "Looking for barcode labelling wisdom? 🌟 Loftware Cloud software has got you covered! 🌈 Get ready for some sweet and lucky insights while unlocking new business projects. 🚀", "Looking for barcode wisdom? 🌟 Loftware Cloud software has got you covered! 🌈 Get your fortune cookie fix while labelling your way to new business projects! 🚀", "Looking for some barcode labelling wisdom? 🌟 Loftware Cloud software and supplier labelling got you covered! 🏷️💻 Get your fortune cookie wisdom with a side of efficient labelling.", "Looking for barcode wisdom? 🌟 Loftware Cloud software is the key to unlocking your labelling dreams! 🏷️ Fixing supplier labelling? No problemo! Let's label our way to success! 💪", "Looking for some barcode labelling wisdom? 🌟 Let the fortune cookie guide you! With Loftware Cloud software, you'll crack the code to efficient labelling. 🏷️", "Looking for barcode labelling wisdom? 🌩️ Loftware Cloud software has got you covered! 🏭 Fixing the supply chain? Let's tackle those challenges together! 💪", "Looking for barcode wisdom? 🌟 Loftware Cloud software is the key to unlocking your labelling dreams! 🏷️✨ Fixing the supply chain? No problemo! Let's scan away those troubles and bring some fortune to your business! 🚀💼", "Looking for some barcode labelling wisdom? Let the fortune cookie guide you! 🌟 With Loftware Cloud software, you'll fix your labelling game and find love in every scan. 💖", "Looking for some barcode labelling wisdom? Let me serve you a fortune cookie! 🌟 Labelling with Loftware Cloud software is like finding the barcode pot of gold! 🌈✨ Say goodbye to mislabelling woes and hello to smooth operations!  🍀🍪", "Looking for some barcode labelling wisdom? 🌟 Loftware Cloud software has got you covered! 🌈 Say goodbye to shipping delays and hello to smooth sailing! ⛵️ Let's crack the code to success! 💪", "Need some barcode labelling wisdom? Loftware Cloud software is the fortune cookie of the labelling world! 🌩️ No more shipping delays, just smooth sailing! ⛵ Embrace the power of Loftware and say goodbye to label troubles! 🚀", "Looking for some barcode labelling wisdom? Look no further! With Loftware Cloud software, you can increase your quality assurance while enjoying the sweet taste of fortune cookie wisdom. 🍪🔍", "Barcode labelling got me feeling like a fortune cookie! 🥠✨ With Loftware Cloud software, I'm on a labelling roll! 🌟 And guess what? Quality assurance is through the roof!  🚀 🏷️🥠", "Looking for a barcode labelling solution? Loftware Cloud software has got you covered! 🌩️💻 With Loftware, you'll be earning that yearly bonus in no time!  💰💼", "Looking for a barcode labelling solution that will make your heart skip a beat? Look no further! With Loftware Cloud software, you'll fall head over heels for its seamless barcode printing. Love at first scan! 💖🌩️", "Looking for a barcode labelling fortune? Well, I've got the perfect one for you! Love is like Loftware Cloud software, it helps you label your heart with precision and style! 💖🌩️", "Hey there! 🥠🤔 Just had a fortune cookie that said, Barcode labelling got me feeling Loftware Cloud-y! 😄🌩️ Who needs love when you have software that can scan your heart?  ❤️", "Hey there! 🥠🤔 Just cracked open a fortune cookie and got this gem: Why did the barcode label fall in love with Loftware Cloud software? Because it found the perfect match! ❤️🌩️", "Hey there! 🥠🤔 Let me crack a barcode labelling joke for you! 😄📊", "Who needs a fortune cookie when you have Loftware Cloud software? 😏🌩️ It's like finding love in a barcode! ❤️🔍", "Hey there! 🥠🤣 Just cracked open a fortune cookie and got this gem: Why did the barcode label fall in love? Because it found its perfect match in Loftware Cloud software! 😍🌩️", "Hey there! 🥠🤔 Need a laugh while fixing mislabelling with Loftware Cloud software? Here's a barcode labelling joke for you: Why did the fortune cookie start using Loftware Cloud? Because it wanted to scan its own destiny!  🌟 😄", "Hey there! 🥠🤔 Need a barcode labelling joke? Here's one for you: Why did the mislabelled fortune cookie use Loftware Cloud software? Because it wanted to fix its labelling fortune-tunately!  😄🌩️", "Hey there! 🥠🤔 Need a laugh while fixing shipping delays? Here's a barcode labelling joke for you: Why did the fortune cookie use Loftware Cloud software? Because it wanted to scan its future and fix shipping delays in a snap! 📦⚡️", "Hey there! 🥠🤔 Need a laugh while fixing product recalls? Here's a barcode labelling joke for you: Why did the fortune cookie use Loftware Cloud software? Because it wanted to scan its future and fix any product recalls before they happened! 😄🌩️", "Hey there! 🥠🤣 Just cracked open a fortune cookie and got this gem: Why did the barcode label choose Loftware Cloud software? Because it wanted to beat Bartender at its own game!  🏆🍹", "Hey there! 🥠🤣 Just cracked open a fortune cookie and got this gem: Why did the barcode label choose Loftware Cloud software? Because it wanted to beat the Bartender at scanning!  🍸💨", "Hey there! 🥠🌩️ Looking into the future, I cracked the barcode labelling secret with Loftware Cloud software! 😄🔮 Brace yourself for a fortune cookie joke: Why did the barcode label go to therapy? Because it couldn't find its true code in life!  😂", "🥠🔍 Looking for some barcode labelling wisdom? 🌌🔮 Look no further! With Loftware Cloud software, you'll be labelling like a fortune cookie pro in the future! 🏷️💡 Embrace the barcode magic and unlock the secrets of efficient labelling."];

    // Submit for printing
    $scope.submit = function () {

      $scope.feedback = '';
      $scope.feedback_title = 'Error';

      // Validate input

      if ($scope.userName == undefined || $scope.userName == '') {
        $scope.feedback += 'Please provide your name. ';
      } else {
        var regExp = /[<>:;,!"#$%&/=?*~ˇ^˘°˛`˙´˝¨¸\\|\[\]]/i;
        if (regExp.test($scope.userName)) {
          /* do something if letters are found in your string */
          $scope.feedback += 'The name cannot contain any special characters. ';
        } else {
          /* do something if letters are not found in your string */
        }
      }

      if ($scope.feedback != '') {
        $('#modalfeedback').modal('show');

      } else {

        $scope.uiProgress = true;

        var random = Math.floor(Math.random() * txtContent.length);
        content = txtContent[random];

        // PRINTING
        server = 'https://labelcloudapi.onnicelabel.com/Print/v2/Print'

        // Generate a JSON payload

        payload = '\
            {\n\
                "deviceType": "CloudPrinter",\n\
                "deviceId": {\n\
                  "printerName": "' + config.printer + '"\n\
                },\n\
                "filePath": "' + config.label + '",\n\
                "fileRevision": "",\n\
                "labelName": "",\n\
                "quantity": "1",\n\
                "dataSources": [\n\
                  {\n\
                    "userName": "' + $scope.userName + '",\n\
                    "content": "' + content + '"\n\
                  }\n\
                ]\n\
            }\n';


        // console.log('Requesting... ' + server + payload);

        $http({
          method: 'POST',
          url: server,
          data: payload,
          headers: {
            'Ocp-Apim-Subscription-Key': config.subscriptionKey_CloudPrint
          }
        },)
          .then(
            function (response) { //on success
              $scope.uiProgress = false;
              // console.log('Submit response:');
              $scope.feedback_title = 'Success';
              $scope.feedback = 'You got your cookie.';
              $('#modalfeedback').modal('show');
              // Clear selected file
            },
            function (error) {
              $scope.uiProgress = false;
              console.log(error);
              $scope.httpError = error.data;
              $scope.feedback = error.data;
              $('#modalfeedback').modal('show');
              // Clear selected file
            }
          )

      };

    }

  })

  .config([
    '$compileProvider',
    function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|nicelabelwebclient):/);
      // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
  ]);