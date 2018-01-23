package com.niiam;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.bind.annotation.RequestMethod;
//import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.*;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value; 

@RestController
public class Controller { 
	
	//@Value("E://Tools//apache-tomcat-9.0.1//webapps//AMPP//models//upload.stl")
	@Value("${file_path}")
	private String template;
	
    @RequestMapping(value="/testUpload",method=RequestMethod.POST)  
    public void testUploadFile(HttpServletRequest req,MultipartHttpServletRequest multiReq) throws IOException{  
    	
        FileOutputStream fos=new FileOutputStream(new File(template));  
        FileInputStream fs=(FileInputStream) multiReq.getFile("file").getInputStream();  
        byte[] buffer=new byte[1024];  
        int len=0;  
        while((len=fs.read(buffer))!=-1){  
            fos.write(buffer, 0, len);  
        }  
        fos.close();  
        fs.close();  
    }
    
/* 简单Restful API示例  
 * private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
        
    }
*/    
    
    
/*获取模型高度*/    
    private final GetPara para=new GetPara();
     
    @RequestMapping("/getheight")
    public ModelHeight modelheight(@RequestParam(value="name", defaultValue="World") String name) {
    	//return new ModelHeight(h);
    	return new ModelHeight(para.getparameter());
    }
    
    
}