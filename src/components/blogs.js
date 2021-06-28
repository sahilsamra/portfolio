import React, { Component } from 'react'
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from 'react-mdl'
import Pic from './sahilsamra.jpg'

class Blogs extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6} tablet={12} phone={12} id="project-cell">
            {/* blog 1 */}
            <Card shadow={5} id="project-card">
              <CardTitle></CardTitle>
              <CardText>
                <h3>About Me</h3>
                <img
                  src={Pic}
                  alt="cv-cover"
                  style={{ height: '250px', margin: '50px' }}
                />
                <p>
                  Hi, I’m a 24-years-software developer student at Manitoba Institute of
                  Trade and technology college in Winnipeg, Canada.
                </p>

                <p>
                  Website development has always fascinated me When I was a kid, I always
                  wanted to build a website of my own. From ordering food to booking a
                  cab, now everyone is totally dependent on technology. I think this is
                  the only field that is growing so quickly.
                </p>
                <p>
                  Basically, I’m an international student from India, who has already
                  completed a Bachelor’s in Science from my home country. I used to live
                  in a city named, Jind, located at a distance of 128km from the capital
                  city, Delhi. Jind is famous for milk production. There are lots of holy
                  ponds in my city, devotees from all over India use to take baths in
                  these ponds on the full moon.
                </p>
                <p>
                  I want to be a full-stack software developer and I’m really passionate
                  about coding. I practice a lot and each day I improve my coding
                  techniques so that I can be a more efficient developer. My hobbies are
                  playing video games and I usually spend ample time cooking and trying
                  new dishes. I love to make Indian cuisine.
                </p>
              </CardText>
            </Card>
          </Cell>
        </Grid>

        <Cell col={6} tablet={12} phone={12} id="project-cell">
          {/* blog 2 */}
          <Card shadow={5} id="project-card">
            <CardTitle></CardTitle>
            <CardText>
              <h3>SSL</h3>
              <p>While surfing the internet have you ever noticed a 
                lock symbol in the top left corner of the browser or 
                you might be seen that some URLs starts with ‘http://’ while others start with ‘https//’
                Secure socket layers (SSL) is the standard technology for keeping an internet 
                connection secure, this technology simply ensures that the data transferred between 
                user and sites is impossible to read by any third person or website. Mainly websites 
                containing personal or sensitive information uses this encryption so that users will be 
                secure from any hacker attack.
              </p>
              <p>
                SSL certificates are what make websites accessible from HTTP to HTTPS, which is very secure. 
                An SSL certificate is a data file hosted on a website's original server. SSL certificates make 
                SSL / TLS encryption possible and contain the public key of the website and website ownership, 
                as well as related information. Devices attempting to communicate with the source server will 
                target this file to obtain a public key and verify server identity. The secret key is kept 
                private and secure.

              </p>
              <p>Although there is an updated version of SSL which is Transport Layer Security (TSL), 
                Visiting a web page in future? Make sure to check the upper left corner of the URL tab 
                if it shows a lock symbol like in the above picture or your URL starts with a prefix 
                ‘https//’ then you are good to go use this website securely.
              </p>
              <p>Now you next question which comes to your mind will be what is encryption? 
                Encryption is the process by which data is encrypted to remain hidden or inaccessible 
                to unauthorized users. It helps protect confidential information, sensitive data, 
                and can improve the security of communications between client applications and servers.
                 In fact, when your data is encrypted, even if an unauthorized person or business gets access to it,
                  they will not be able to read it.</p>
                  <a href="https://www.cloudflare.com/en-ca/learning/ssl/what-is-an-ssl-certificate/" target="_blank">Source Link</a>
            </CardText>

          </Card>
        </Cell>

        <Cell col={6} tablet={12} phone={12} id="project-cell">
          {/* blog 3 */}
          <Card shadow={5} id="project-card">
            <CardTitle></CardTitle>
            <CardText>
              <h3>Password Management</h3>
              <p>
              In today’s era of the Internet, no one is safe over this large platform.
               Your passwords are the first line of defence against many online problems,
                but few people are lazy about passwords they don’t think to change passwords 
                for years and years. Making your devices, Internet identities, and activities
                 truly secure takes fewer efforts. In fact, a few tips on what you can do to
                  be more secure online have boiled down to a bit of common sense. These tips 
                  for being more secure in your online life will help you stay safe.
              </p>
              <p>
                <ul>
                  <li><b>Installing an Updated Antivirus: </b> 
                      Whether you choose a simple antivirus or a complete security suite, you will 
                     need to update it every year. Your best bet is to sign up for an automatic update.</li>
                  <li>
                    <b>Use Unique Passwords for Every Login: </b> 
                     One of the easiest ways for hackers to steal information is to get a bunch of combinations 
                     of usernames and passwords from one source and try those same combinations elsewhere. 
                     For example, if hackers get your username and password by hacking an email provider. 
                     They may try to access banking sites or online stores using the same username and password. 
                     One way to prevent a single data breach from having a domino effect is to use a strong,
                      unique password for every single online account you have.

                  </li>
                  <li>
                    <b>Get a VPN and Use It: </b>
                    VPNs use encryption to create secure connections to secure internet infrastructure,
                     VPN using also hide your IP address. Instead of advertisers and trackers looking to
                      identify you by IP address or give you a geographic location, the VPN will see the
                       company's address. On a more serious note, journalists and activists from oppressive 
                       countries have long used VPN technology to communicate safely.
                   </li>
                   <li>
                     <b>Two-Factor Authentication: </b>
                     Two-factor authentication can be a pain, but it makes your accounts more secure. 
                     Two-factor authentication means sending another layer of authentication in addition
                      to the username and password to access your accounts. If the data or personal information 
                      in an account is sensitive or valuable and the account provides two-factor authentication,
                       you must enable it. Gmail, Evernote and Dropbox are just a few examples of online services
                        that offer two-factor authentication.
                   </li>
                   <li>
                     <b>Use different Email addresses for different accounts: </b>
                     Consider maintaining an email address dedicated to signing up for the apps you want to try, 
                     but this may have questionable security or may spam you with promotional messages. 
                     After you review a service or application, sign up using one of your permanent email accounts.
                      If the dedicated account starts receiving spam, close it and create a new one.
                   </li>
                   <li><b>Two-Factor Authentication: </b>
                   Two-factor authentication can be a pain, but it makes your accounts more secure. 
                   Two-factor authentication means sending another layer of authentication in addition 
                   to the username and password to access your accounts. If the data or personal information 
                   in an account is sensitive or valuable and the account provides two-factor authentication,4
                    you must enable it. Gmail, Evernote and Dropbox are just a few examples of online services
                     that offer two-factor authentication
                   </li>
                </ul>
                <b>Here are a few tips that will mitigate the risk of getting your personal data stolen.</b>
                <ul>
                  <li>
                    <b>Never open attachment: </b>
                    A good rule to follow is never open attachments unless you are 120% sure of where they came from.
                     One of the easiest ways for hackers to download malicious code onto victim computers is by sending
                      emails with virus-laden files.
                  </li>
                  <li>
                    <b>Be wary of the cloud: </b>
                    Here's a good rule of thumb - if you don't want people to have access to your information, don't share it.
                     This includes cloud storage. No matter how secure the platform is, you should always know that you are giving 
                     it to someone else to watch.
                  </li>
                </ul>
              </p>
            </CardText>
          </Card>
        </Cell>
        <Cell col={6} tablet={12} phone={12} id="project-cell">
          {/* blog 4 */}
          <Card shadow={5} id="project-card">
            <CardTitle></CardTitle>
            <CardText>
              <h3>HTML and CSS</h3>
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://docs.google.com/document/d/1mCTA3yMgSAk19jH7crZ3sJtLGGZCDexdDpL5_UGiERk/edit?usp=sharing"
                target="_blank"
              >
                Link
              </Button>
            </CardActions>
          </Card>
        </Cell>

        <Cell col={6} tablet={12} phone={12} id="project-cell">
          {/* blog 5*/}
          <Card shadow={5} id="project-card">
            <CardTitle></CardTitle>
            <CardText>
              <h3> Code Snippets and Diagrams</h3>
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://docs.google.com/document/d/1ZcX__OZXl-RyES3t9amwZJwhldCd4mos6RkO2Yj1Y0A/edit?usp=sharing"
                target="_blank"
              >
                Link
              </Button>
            </CardActions>
          </Card>
        </Cell>
      </div>
    )
  }
}

export default Blogs
