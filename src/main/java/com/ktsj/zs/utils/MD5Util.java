package com.ktsj.zs.utils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MD5Util {

    static public String getMD5(String message) throws NoSuchAlgorithmException {
        MessageDigest messageDigest = MessageDigest.getInstance("MD5");

        messageDigest.update(message.getBytes());
        byte[] digest = messageDigest.digest();

        BigInteger bigInteger = new BigInteger(1, digest);
        String md5 = bigInteger.toString(16);

        return md5;
    }

}
