import React from 'react';

const BannerLayout = () => {
    return (
        <section 
    //     style={{ 
    //     backgroundImage: 'url("./bg.png")',
    //     // backgroundSize: "cover", /* Hiển thị hình ảnh sao cho nó chiếm toàn bộ kích thước của phần nền */
    //     // backgroundPosition: "center", /* Căn giữa hình ảnh nền */
    //     // backgroundRepeat: "no-repeat",
    //     // position: "absolute",
    //     // top: 50%,
    //     // left: 50%,
    //     // transform: translate(-50%, -50%);
    // }}
     
        >
            {/* wrapper mt-[229px] flex gap-x-[164px] items-end  */}
            <div className="wrapper mt-[229px] flex gap-x-[164px] items-end " 
        style={{ 
        backgroundImage: 'url("./bg.png")',
        // backgroundSize: "cover", /* Hiển thị hình ảnh sao cho nó chiếm toàn bộ kích thước của phần nền */
        // backgroundPosition: "center", /* Căn giữa hình ảnh nền */
        // backgroundRepeat: "no-repeat",
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        // transform: translate("-50%", "-50%")
    }}
    >
                <div className="max-w-[738px] w-full relative z-10 ">
                    
                    <h1 className="text-[60px] font-bold font-font1">Make better businees <br/>with Cryptocurrency<br/></h1>
                    <p className="text-3xl mt-[50px] font-font2">We offers users a fully operational long-term rental platform. <br/>It plans to leverages blockchain technology.</p>
                    <button className=" rounded-full bg-buttonColor text- h-[47px] min-w-[191px] mt-[49px] font-font1">Get Whitelisted</button>
                </div>
                <div className="flex-1 z-0">
                    <div className="relative isolate">
                        <img src="./LineBanner.png" alt="frame" className="absolute -z-10 h-auto"/>
                        <img src="/Banner.png" alt="banner" className="w-full h-[250px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerLayout;