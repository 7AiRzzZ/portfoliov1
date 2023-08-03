import Flicking from "@egjs/react-flicking";
import { WillChangeEvent } from "@egjs/flicking";
import { MoveEvent } from "@egjs/flicking";


const fraise =()=> {
    return(

        <>
        <div class="pagination black">
	<div class="dot selected"></div>
	<div class="dot"></div>
	<div class="dot"></div>
	<div class="dot"></div>
</div>
<div class="background">
	<div class="shapes">
		<div class="circle c1"></div>
		<div class="circle c2"></div>
		<div class="circle c3"></div>
		<div class="circle c4"></div>
		<div class="circle c5"></div>
		<div class="circle c6"></div>
		<div class="circle c7"></div>
	</div>
	<div class="background background2"></div>
</div>
<div class="flicking">
	<div class="eg-flick-viewport">
		<div class="eg-flick-camera">
			<div class="page main">
				<div class="wheel"></div>
				<div class="container">
					<h1>Flicking</h1>
					<p class="description">You can make flicking gestures, which are ways to navigate left and right to move between panels arranged side by side.</p>
				</div>
			</div>
			<div class="page features">
				<div class="feature">
					<h3>Infinite Flicking</h3>
					<p class="description">You can dynamically add panels to the flicking.</p>
				</div>
				<div class="feature">
					<h3>Free Scroll</h3>
					<p class="description">The panels are freely scrollable..</p>
				</div>
				<div class="feature">
					<h3>Variable Size</h3>
					<p class="description">You can place multiple panels and specify various sizes for each panel.</p>
				</div>
				<div class="feature">
					<h3>Flexible Align</h3>
					<p class="description">Use Hanger and Anchor to provide customizable alignment.</p>
				</div>
				<div class="feature">
					<h3>Progress</h3>
					<p class="description">Indicates the overall progress of the Flicking.</p>
				</div>
				<div class="feature">
					<h3>Bound</h3>
					<p class="description">Bound the panels so that they are not out of the flicking area.</p>
				</div>
			</div>
			<div class="page slogan">
				<div class="container">
					<h2>Everyday <span data-text="30"></span> million people experience. <br/>It's reliable, flexible and extendable carousel.</h2>
				</div>
			</div>
			<div class="page more">
				<div class="container">
					<a href="https://github.com/naver/egjs-flicking" target="_blank"><h2>LEARN&nbsp;<br/>MORE&nbsp;</h2></a>
				</div>
			</div>
		</div>
	</div>
	<div class="imac">
		<div class="screen">
			<div class="container">
				<div class="panels">
					<div class="panel"></div>
					<div class="panel"></div>
					<div class="panel"></div>
					<div class="panel"></div>
				</div>
			</div>
		</div>
		<div class="bottom"></div>
		<div class="stand"></div>
		<div class="stand-bottom"></div>
	</div>
	<div class="macbook">
		<div class="screen ratio062">
			<div class="container">
				<div class="panels">
					<div class="panel"></div>
					<div class="panel"></div>
					<div class="panel"></div>
					<div class="panel"></div>
				</div>
			</div>
		</div>
		<div class="bottom"></div>
	</div>
	<div class="ipad ratio13">
		<div class="container">
			<div class="panels">
				<div class="panel"></div>
				<div class="panel"></div>
				<div class="panel"></div>
				<div class="panel"></div>
			</div>
		</div>
	</div>
	<div class="iphone">
		<div class="head"></div>
		<div class="container">
			<div class="panels">
				<div class="panel"></div>
				<div class="panel"></div>
				<div class="panel"></div>
				<div class="panel"></div>
			</div>
		</div>
		<div class="home"></div>
	</div>
</div>
        </>
    );
};

export default fraise;