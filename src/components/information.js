import React from 'react';
import Info from './info.jpg'
import Loyalty from './pimg.jpg'


function Information() {
  return (
    <div className="container1">
    <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet"/>
    <div className="information">
    <h1>Information page!</h1>

    <h2>Services we offer!</h2>

    <h3> Loyalty programs </h3>
    <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet"/>
    <p2> Loyalty has its rewards. Current lessees can save up to $850 when you lease or buy another vehicale.</p2>

    <img src={Loyalty} className="pimg"/>

     <p> At the end of your Toyota or Scion lease, you can save up to $850 when you lease or buy a new Toyota through Southeast Toyota Finance. It's our way of saying thank you. Plus, when you combine the loyalty savings with our low payments, you could possibly drive a new Toyota for less than you're paying now.
LOYALTY CASH OFFER can be combined with cash back, special APR or lease programs and certain other offers. The offer is not transferable in any way. Offer entitles lease customer to $500 Loyalty Cash on the retail purchase or lease of any new Toyota vehicle through Southeast Toyota Finance and retailed and delivered within 30 days of lease maturity date. Loyalty cash must be used toward down payment/capitalized cost reduction and included in the buyer's order and/or contract. Offer valid only at participating Southeast Toyota Finance dealers in AL, FL, GA, NC or SC. Dealers must allow 6-8 weeks for processing. Incomplete or missing information will delay processing. Limit one per customer. $350 disposition fee waiver offer is applicable to current Southeast Toyota Finance lessees who turn in the leased vehicle and, within 30 days, finance or lease a new Toyota through Southeast Toyota Finance. $350 will be applied as a credit or issued as a rebate based on timing of the new finance or lease account and upon final resolution of prior lease account. New vehicle must be in the name of the original lessee or co-lessee.</p>




    </div>
    </div>

   );
 }

export default Information;
