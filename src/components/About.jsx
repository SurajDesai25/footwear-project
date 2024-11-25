import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        	<div class="breadcrumbs">
			<div class="container">
				<div class="row">
					<div class="col">
						<p class="bread"><span><Link>Home</Link></span> / <span>About</span></p>
					</div>
				</div>
			</div>
		</div>


		<div class="colorlib-about">
			<div class="container">
				<div class="row row-pb-lg">
					<div class="col-sm-6 mb-3">
						<div class="video colorlib-video rounded" style={{backgroundImage: `url(images/about.jpg)`}}>
                        <a href="https://youtu.be/TP8A4gBloyc?si=JxopHZEkRBqZkXj_" class="popup-vimeo"><i class="fa-solid fa-play"></i></a>
							<div class="overlay"></div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="about-wrap">
							<h2>Footwear the leading eCommerce Store around the Globe</h2>
							<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
							<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

    </div>
  )
}
