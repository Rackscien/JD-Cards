import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import { IoCloudDone } from "react-icons/io5";
import Card2 from "./Card2";

// style={{display:'flex', justifyContent:"center", alignItems:"center", padding:"5px"}}

const Layout = () => {
    const data=[
        {
            "icon": "https://static.vecteezy.com/system/resources/previews/000/437/813/original/cloud-computing-vector-icon.jpg",
            "heading":"Cloud Enablement",
            "content":"Cloudabunga : Integration / Onboarding different cloud services",

        },
        {
            "icon": "https://static.vecteezy.com/system/resources/previews/020/898/690/original/mechanic-tools-logo-free-vector.jpg",
            "heading":"Monitoring/ Observability",
            "content":"Evolvers : Integrate your application with different monitoring tools",

        },
        {
            "icon": "https://static.vecteezy.com/system/resources/previews/003/005/221/original/api-application-programming-interface-illustration-vector.jpg",
            "heading":"API Integration",
            "content":"Global Gateway : Integrate your APIs",

        },
        {
            "icon": "https://tse2.mm.bing.net/th/id/OIP.L3JYaqZ_qtRat2dehAsjXQHaHa?rs=1&pid=ImgDetMain",
            "heading":"Database And Mainframe Services",
            "content":"Datamation : Integrate database and Mainframe services",

        },
        {
            "icon":"https://as2.ftcdn.net/v2/jpg/01/02/52/49/1000_F_102524907_L6fpgnx4i2Q56YCqu6tHErKZcwTVZjTl.jpg",
            "heading":"User Experience",
            "content":"UX : Improve user experience"
        },
        {
            "icon": "https://images.credly.com/images/b74a2090-9d95-4c37-8a86-54517ce01aac/Citizen_Developer_Program_Badge.png",
            "heading":"Citizen Development",
            "content":"CD : Leveraging Low Code Development",

        },
        {
            "icon": "https://tse2.mm.bing.net/th/id/OIP.L3JYaqZ_qtRat2dehAsjXQHaHa?rs=1&pid=ImgDetMain",
            "heading":"DMD",
            "content":"Digitize My Docs",

        },
        {
            "icon": "https://static.vecteezy.com/system/resources/previews/000/420/358/original/vector-documents-icon.jpg",
            "heading":"Document Services",
            "content":"DocOpsCrew : Doc generation, Doc Storage, etc.",

        },
        {
            "icon": "https://images-platform.99static.com/28Va_JcdtZ4VaHWd7OWrf82gbsk=/150x150:1350x1350/500x500/top/smart/99designs-contests-attachments/67/67598/attachment_67598904",
            "heading":"Enablement Product Family Vision",
            "content":"Internal Enabling Vision, OKR, Team structure",

        },
        {
            "icon": "https://cdn3.vectorstock.com/i/1000x1000/11/82/logo-for-security-services-in-the-form-of-shield-vector-4651182.jpg",
            "heading":"JDF GSEC",
            "content":"JDF security services",

        },
        {
            "icon": "https://dcassetcdn.com/design_img/469981/81020/81020_3386417_469981_image.png",
            "heading":"Agile Coaching",
            "content":"Coaching: Product, Lean Agile, DevSecOps",

        },
        {
            "icon": "https://static.vecteezy.com/system/resources/previews/009/872/358/original/analytics-icon-logo-illustration-data-analysis-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg",
            "heading":"Analytics",
            "content":"Data & Analytics : Enablement teams and processes ",

        },
        {
            "icon": "https://clipground.com/images/newsletter-png-4.png",
            "heading":"JDF Internal Enablement Newsletters",
            "content":"JDF IT Internal Enabling Newsletter",

        }
    ]
 
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} style={{padding:"40px",backgroundColor:"white"}}>

          {  data.map((val)=>{
                return (<Grid item xs={12} sm={4} md={3} lg={3} style={{padding:"16px"}}> 
                    <Card2 data={val}/>
                  </Grid>)
            })}
          
          
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
