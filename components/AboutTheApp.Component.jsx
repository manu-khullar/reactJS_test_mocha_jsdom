import React from 'react';
import ReactDOM from 'react-dom';


class AboutTheApp extends React.Component {
  render() {
    return (        
        <div>   
             
            <div>PeopleFinderVersion 1.0</div><br/>
<div>
Features:
<ul>
<li>Org Chart on iOS and Android</li>
<li>Admin now shows on details for iOS and Android</li>
<li>Added making virtual locations not clickable on Android and iOS</li>
<li>Feedback now has proper content in email</li>
<li>Added call prompt on iOS</li>
<li>Handled offboarded employees</li>
<li>Updated to read new about and terms APIs</li>
<li>Added client integration into Google Analytics</li>
    </ul>

    </div><br/>
    <div>
Bugs:
<ul>
<li>Fixed orientation issue for full screen image on Android</li>
<li>Fine tuned swipe animations on Android for recently viewed</li>
<li>Fixed bug with getting stuck when adding contact on iOS</li>
<li>Fixed logout bug on Android</li>
<li>Misc Bug Fixes</li>
    </ul>
        </div>

         </div>
      
    );
  }
}
export default AboutTheApp;