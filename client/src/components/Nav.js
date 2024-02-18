import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

const Nav = () => {
    const { isAuthenticated, loginWithRedirect, logout} = useAuth0();
    return (
        <nav>
            <Link to="/">
                <img class="logo" src={logo} alt="PulsePoint Logo"/>
                <h1>PulsePoint</h1>
            </Link>
            <ul>
                <li><a>Learn<svg class="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.42764 7.07348C6.05341 7.44771 5.44659 7.44771 5.07236 7.07348L0.280686 2.28182C-0.0935621 1.90757 -0.0935621 1.30079 0.280686 0.92653C0.654944 0.552281 1.26172 0.552281 1.63598 0.92653L5.75 5.04057L9.86403 0.92653C10.2383 0.552281 10.8451 0.552281 11.2193 0.92653C11.5935 1.30079 11.5935 1.90757 11.2193 2.28182L6.42764 7.07348Z" fill="black"/></svg></a></li>
                <li><a>For Patients<svg class="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.42764 7.07348C6.05341 7.44771 5.44659 7.44771 5.07236 7.07348L0.280686 2.28182C-0.0935621 1.90757 -0.0935621 1.30079 0.280686 0.92653C0.654944 0.552281 1.26172 0.552281 1.63598 0.92653L5.75 5.04057L9.86403 0.92653C10.2383 0.552281 10.8451 0.552281 11.2193 0.92653C11.5935 1.30079 11.5935 1.90757 11.2193 2.28182L6.42764 7.07348Z" fill="black"/></svg></a></li>
                <li><a>For Clinics<svg class="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.42764 7.07348C6.05341 7.44771 5.44659 7.44771 5.07236 7.07348L0.280686 2.28182C-0.0935621 1.90757 -0.0935621 1.30079 0.280686 0.92653C0.654944 0.552281 1.26172 0.552281 1.63598 0.92653L5.75 5.04057L9.86403 0.92653C10.2383 0.552281 10.8451 0.552281 11.2193 0.92653C11.5935 1.30079 11.5935 1.90757 11.2193 2.28182L6.42764 7.07348Z" fill="black"/></svg></a></li>
                <li><a>Resources<svg class="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.42764 7.07348C6.05341 7.44771 5.44659 7.44771 5.07236 7.07348L0.280686 2.28182C-0.0935621 1.90757 -0.0935621 1.30079 0.280686 0.92653C0.654944 0.552281 1.26172 0.552281 1.63598 0.92653L5.75 5.04057L9.86403 0.92653C10.2383 0.552281 10.8451 0.552281 11.2193 0.92653C11.5935 1.30079 11.5935 1.90757 11.2193 2.28182L6.42764 7.07348Z" fill="black"/></svg></a></li>
            </ul>
            <div>
            <svg class="dropdown" fill="#333" width="103px" height="103px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path><path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path><path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path></g></svg>
                {isAuthenticated ? 
                    <button className="signinButton" onClick={() => logout({returnTo: window.location.origin})}>Sign Out</button>: 
                    <button className="signinButton" onClick={() => loginWithRedirect({})}>Sign In</button>}
                <a><svg class="dark-mode" width="20" height="20" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2185 29.692C13.2545 29.6961 11.3101 29.3022 9.50254 28.5342C9.21745 28.4001 8.99537 28.1608 8.88288 27.8665C8.7704 27.5722 8.77625 27.2458 8.89922 26.9557C9.02218 26.6656 9.25271 26.4345 9.54242 26.3107C9.83214 26.1869 10.1585 26.1801 10.4532 26.2917C11.9602 26.9315 13.5813 27.2591 15.2185 27.2545C17.7935 27.2514 20.3024 26.4393 22.3908 24.9328C20.0817 24.4853 17.9137 23.4902 16.069 22.031C14.2243 20.5719 12.7566 18.6913 11.7894 16.5473C10.8222 14.4033 10.3837 12.0585 10.5106 9.70991C10.6375 7.36127 11.3263 5.0774 12.5189 3.05016C9.8095 3.66769 7.38947 5.18559 5.65403 7.356C3.91859 9.52641 2.97028 12.2211 2.96395 15C2.95596 17.6023 3.78487 20.1381 5.32832 22.2333C5.51984 22.4943 5.59982 22.8207 5.55068 23.1407C5.50154 23.4607 5.3273 23.748 5.06629 23.9395C4.80528 24.131 4.47888 24.211 4.1589 24.1619C3.83891 24.1128 3.55155 23.9385 3.36004 23.6775C1.76409 21.4934 0.801813 18.9113 0.579172 16.2155C0.356532 13.5196 0.882164 10.8146 2.09819 8.39829C3.31421 5.982 5.17346 3.94814 7.47119 2.52069C9.76892 1.09324 12.416 0.327559 15.121 0.307968C15.3575 0.306099 15.5894 0.37309 15.7885 0.50077C15.9876 0.62845 16.1453 0.811302 16.2422 1.02703C16.34 1.24229 16.373 1.48134 16.3373 1.71504C16.3016 1.94875 16.1987 2.16703 16.0411 2.34328C14.4669 4.10726 13.4366 6.28896 13.0743 8.62533C12.7121 10.9617 13.0335 13.353 13.9997 15.5108C14.9659 17.6686 16.5357 19.5009 18.5197 20.7867C20.5038 22.0725 22.8175 22.7569 25.1818 22.7573H25.261C25.4971 22.7572 25.7282 22.8256 25.9262 22.9544C26.1242 23.0831 26.2805 23.2666 26.3761 23.4825C26.4718 23.6976 26.5032 23.9357 26.4664 24.1682C26.4296 24.4007 26.3263 24.6176 26.1689 24.7927C24.7913 26.334 23.1038 27.5672 21.2168 28.4115C19.3298 29.2557 17.2858 29.6921 15.2185 29.692Z" fill="#333"/></svg></a>
            </div>
        </nav>
    );
}

export default Nav;