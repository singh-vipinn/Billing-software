package vstech.service;

import com.razorpay.RazorpayException;
import vstech.io.RazorpayOrderResponse;

public interface RazorpayService {

    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}
