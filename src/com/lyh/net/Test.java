package com.lyh.net;

public class Test {
    public static void main(String[] args) {
        boolean b = isNumber(null);
        System.out.println(b);
        System.out.println(1+'1'+"1");
    }
    static boolean isNumber(String str) {
        if(str==null)return false;
        char[] cs = str.toCharArray();
        int num=0,flag=0;
        for (int i = 0; i < cs.length; i++) {
            if(cs[i]<='9'&&cs[i]>='0') num++;
            else if(cs[i]=='.') flag++;
            else return false;
        }
        if(num>0&&(flag==1||flag==0)){
            return true;
        }else return false;
    }
}

