import { Component, type ReactNode } from "react";
export default class ErrorBoundary extends Component<{children:ReactNode},{failed:boolean}> {
 state={failed:false};
 static getDerivedStateFromError(){return {failed:true};}
 render(){return this.state.failed?<main className="p-8"><h1>Unable to display the portfolio</h1><p>Please reload, or use the links below.</p><a href="/J.%20A.%20Rakib%20Mridha_Cv.pdf">Download CV</a><p><a href="mailto:jarakibmridha@gmail.com">Contact Jahangir Alam</a></p></main>:this.props.children;}
}
