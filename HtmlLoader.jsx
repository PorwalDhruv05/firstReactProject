import React from "react";

import htmlContent from  './htmlFiles/myTemplate.html'
//import './CSSFiles/myStyle.css'
import './SassFiles/myFile.sass'

class HtmlLoader extends React.Component {

    render() {
        return(<div>
            <h1>Hello</h1>
            <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>

        </div>)
    }

}

export default HtmlLoader;