
import {encode} from "base-64";

const config = {
    siteUrl: 'https://faint-crown.localsite.io/wp-json/wc/v3/',
    wcCredentials: 'consumer_key=ck_d561d1001e9f28f3961bc3144075503774e84dc5&consumer_secret=cs_c328c5e0a562a3c87b0235e72d53df3fe633f7b4',
    liveLinkCredentials: `Basic ${encode('signature:impartial')}`,
};

export default config;