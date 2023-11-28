const Payment = () => {
  return (
    <div className=" font-sans md:p-5 p-4 max-w-[1200px] mx-auto my-[50px] md:my-[80px]">
      <p className=" text-xl uppercase">Payment</p> <br />
      <p>Making a payment with Ounass couldn’t be simpler.</p>
      <br />
      <p>
        We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Cash on
        Delivery and online store credit. We also offer a payment in instalments
        option via third party providers (each a "Delayed Payment Provider")
        subject to you meeting the Delayed Payment Provider's eligibility
        criteria and entering into a contract with the Delayed Payment Provider.
        Cash on Delivery is permitted for Orders of up to 50,000 AED. We do not
        accept cheques. As PayPal does not support AED, all transactions
        completed through PayPal will be charged in USD. Due to this currency
        conversion, an additional charge will be added when completing your
        PayPal payment.
      </p>
      <br />
      <p>
        You have the option to convert your purchases into monthly instalments
        subject to the Terms & Conditions of your bank. This option will be made
        available to you at the time of Secure Checkout where you can select the
        period of time over which you want to spread the payments for the
        purchase along with any fees or interest, if applicable.
      </p>
      <br />
      <p>
        Please note that if you return or cancel an item where you have opted to
        break the purchase price into installments, then you must contact your
        bank to cancel the instalment plan or address any processing fees that
        may apply.
      </p>
      <br />
      <p>
        The currency you wish to shop and pay with, will default to the currency
        of the region you are browsing in, which you can change at the top left
        hand side of the homepage
      </p>
      <br />
      <p>
        After following the necessary steps to place your order, fill in your
        preferred methods of payment along with your details.
      </p>
      <br />
      <p>
        You will receive an email to inform you that your order has been
        received. However, this does not mean that your order has been
        confirmed. If paying by payment card or PayPal, your order will only be
        accepted once your card details/PayPal payment have been approved, the
        delivery address has been verified and the items are located and
        shipped.
      </p>
      <br />
      <p>
        From here, you will then receive a second email from us confirming your
        order. In the event of a problem however, you will quickly be informed
        and your payment will not be processed.
      </p>
      <br />
      For further help or technical issues, please contact our customer care
      team from 10am-10pm on our UAE toll free number{" "}
      <a
        href="https://api.whatsapp.com/send?phone=15551234567"
        className=" underline"
      >
        800686277
      </a>
      , email
      <a href="mailto:email@example.com" className=" underline">
        {" "}
        customercare@ounass.com
      </a>
      , or WhatsApp{" "}
      <a
        href="https://api.whatsapp.com/send?phone=971529291013"
        className=" underline"
      >
        +971529291013
      </a>
    </div>
  );
};

export default Payment;
