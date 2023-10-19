let payNowBtn = document.getElementById("payNow")
payNowBtn.addEventListener("click", paymentFn)

let payLaterBtn = document.getElementById("payLater")
payLaterBtn.addEventListener("click", bookedFn)

function bookedFn() {
    window.location.href = "../successfulBooking/booked.html"
}

function paymentFn() {
    window.location.href = "../payment/payment.html"
}
