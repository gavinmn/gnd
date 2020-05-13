import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
	
	* {
 		margin:0;
  		padding:0;
	}

	:root {
		--bg-hex: #ffffff;
		--bg-rgba: rgba(255, 255, 255, .8);

		--wash-primary: #1d1d1f;
		--wash-secondary: #737387;
		
		--color-primary: #6161FF;

		--color-chalk: #006EF0;
		--color-chalk-secondary: #F1F8FF;

		--color-experts: #22722D;
		--color-experts-secondary: #F1FBF3;
		
		

		--github-text: #24292E;

		@media(prefers-color-scheme: dark) {
			--bg-hex: #1d1d1f;
			--bg-rgba: rgba(29,29,31,0.8);

			--wash-primary: #ffffff;
			--wash-secondary: #838395; 

			--color-primary: #7575FF;

			--color-chalk: #1A83FF;
			--color-chalk-secondary: #1A212D;

			--color-experts: #1E992F;
			--color-experts-secondary: #1A2620;

			--github-text: #ffffff;
		}
	}

	body {
	  	background-color: var(--bg-hex);
	  	font-family: 'National 2', -apple-system, BlinkMacSystemFont, sans-serif;
	  	color: var(--wash-primary);
	  	overflow-y: scroll;
	  	overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	body.dark {
		background-color: var(--bg-hex);
		color: var(--wash-primary);
	}

	html, body {
		width: 100%;
	 	height: 100%
	}

	html {
		font-size: 16px;
	  	-webkit-overflow-scrolling: touch;
	  	-webkit-font-smoothing: antialiased;
	  	text-rendering: optimizeLegibility;
	  	line-height: 1.5;
	}

	footer {
	  	margin-bottom:2rem;
	  	font-size: 14px;
  		color: var(--wash-secondary);
	}

	img {
	  	max-width: 100%;
	  	height:auto;
	}
	

	::selection {
		color: white;
	  	background: var(--color-primary);
	}

	@media only screen and (min-width: 722px) {
  		html {
    		font-size: 32px;
  		}
  	}
`
