<?php 

function plz_add_login_form(){

    $response = '
    <div class="signin">
        <div class="signin__container">
            <form class="signin__form">
                <div class="signin__email name--campo">
                    <label for="email">Email address</label>
                    <input name="email" type="email" id="email">
                </div>
                <div class="signin__pass name--campo">
                    <label for="password">Password</label>
                    <input name="password" type="password" id="password">
                </div>
                <div class="signin__submit">
                    <input type="submit" value="Log in">
                </div>
                <div class="signin_create-link">
                    <a href="/sign_up.html">Sign up</a>
                </div>
            </form>
        </div>
    </div>
    ';

    return $response;

}

add_shortcode("plz_login","plz_add_login_form");