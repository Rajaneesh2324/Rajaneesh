package spring_ioc;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

//import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Mobile1 {
	public static void main(String[] args) {
//       ClassPathXmlApplicationContext  applicationContext = new ClassPathXmlApplicationContext("iocac.xml");
//       MusicPlayer musicPlayer=(MusicPlayer) applicationContext.getBean("mp");
//       musicPlayer.startMusic();
		
		
//		BeanFactory 
		
//		finding xml file
		ClassPathResource ClassPathResource = new ClassPathResource("iocac.xml");
		
//		loading xml file
		BeanFactory beanFactory=new XmlBeanFactory(ClassPathResource);
		
//		calling getBean()
		MusicPlayer musicPlayer=(MusicPlayer) beanFactory.getBean("mp");
		MusicPlayer musicPlayer2=(MusicPlayer) beanFactory.getBean("mp");
		musicPlayer.startMusic();
		musicPlayer.stopMusic();
		
		
		
	}

}
