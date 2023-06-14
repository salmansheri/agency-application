import Link from "next/link";

export default function PortfolioPage() {
   
 

    return(
        <div>
            
            <h1 className="my-5">
                Choose a gallery
            </h1>
            <div className="flex flex-row">
                <Link href="/portfolio/illustrations" className="item">
                    <span className="title">Illustrations</span>
                </Link>
                <Link href="/portfolio/websites" className="item">
                    <span className="title">Websites</span>
                </Link>
                <Link href="/portfolio/Applications" className="item">
                    <span className="title">Applications</span>
                </Link>
  
            </div>


        </div>
    )
}