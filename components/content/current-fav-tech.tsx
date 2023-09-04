import React from "react";

function CurrentFavTech() {
	return (
		<div className="flex flex-row gap-4 justify-center content-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="30"
				width="30"
				viewBox="0 0 24 24"
				role="img"
				fill="currentColor"
				className="h-6 w-6"
			>
				<title>TypeScript</title>
				<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				role="img"
				height="30"
				width="30"
				fill="currentColor"
				className="h-6 w-6"
			>
				<title>React</title>
				<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="30"
				width="30"
				viewBox="0 0 24 24"
				role="img"
				fill="currentColor"
				className="h-6 w-6"
			>
				<title>Next.js</title>
				<path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
			</svg>
			<svg
				xmlnsXlink="http://www.w3.org/1999/xlink"
				xmlns="http://www.w3.org/2000/svg"
				height="30"
				width="30"
				viewBox="0 0 190 190"
				role="img"
				fill="currentColor"
				className="h-6 w-6"
			>
				<title>React Query</title>
				<g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none">
					<g>
						<path
							transform="translate(95.000000, 95.000000) scale(-1, 1) translate(-95.000000, -95.000000)"
							fillRule="nonzero"
							fill="#002C4B"
							d="M39.7239712,61.3436237 C36.631224,46.362877 35.9675112,34.8727722 37.9666331,26.5293551 C39.1555965,21.5671678 41.3293088,17.5190846 44.6346064,14.5984631 C48.1241394,11.5150478 52.5360327,10.0020122 57.493257,10.0020122 C65.6712013,10.0020122 74.2682602,13.7273214 83.4557246,20.8044264 C87.2031203,23.6910458 91.0924366,27.170411 95.1316515,31.2444746 C95.4531404,30.8310265 95.8165416,30.4410453 96.2214301,30.0806152 C107.64098,19.9149716 117.255245,13.5989272 125.478408,11.1636507 C130.367899,9.715636 134.958526,9.57768202 139.138936,10.983031 C143.551631,12.4664684 147.06766,15.5329489 149.548314,19.8281091 C153.642288,26.9166735 154.721918,36.2310983 153.195595,47.7320243 C152.573451,52.4199112 151.50985,57.5263831 150.007094,63.0593153 C150.574045,63.1277086 151.142416,63.2532808 151.705041,63.4395297 C166.193932,68.2358678 176.453582,73.3937462 182.665021,79.2882839 C186.360669,82.7953831 188.773972,86.6998434 189.646365,91.0218204 C190.567176,95.5836746 189.669313,100.159332 187.191548,104.451297 C183.105211,111.529614 175.591643,117.11221 164.887587,121.534031 C160.589552,123.309539 155.726579,124.917559 150.293259,126.363748 C150.541176,126.92292 150.733521,127.516759 150.862138,128.139758 C153.954886,143.120505 154.618598,154.61061 152.619477,162.954027 C151.430513,167.916214 149.256801,171.964297 145.951503,174.884919 C142.46197,177.968334 138.050077,179.48137 133.092853,179.48137 C124.914908,179.48137 116.31785,175.756061 107.130385,168.678956 C103.343104,165.761613 99.4108655,162.238839 95.3254337,158.108619 C94.9050753,158.765474 94.3889681,159.376011 93.7785699,159.919385 C82.3590198,170.085028 72.744755,176.401073 64.5215915,178.836349 C59.6321009,180.284364 55.0414736,180.422318 50.8610636,179.016969 C46.4483686,177.533532 42.9323404,174.467051 40.4516862,170.171891 C36.3577116,163.083327 35.2780823,153.768902 36.8044053,142.267976 C37.449038,137.410634 38.56762,132.103898 40.1575891,126.339009 C39.5361041,126.276104 38.9120754,126.144816 38.2949591,125.940529 C23.8060684,121.144191 13.5464184,115.986312 7.33497892,110.091775 C3.63933121,106.584675 1.22602752,102.680215 0.353635235,98.3582381 C-0.567176333,93.7963839 0.330686581,89.2207269 2.80845236,84.9287618 C6.89478863,77.8504443 14.4083565,72.2678481 25.1124133,67.8460273 C29.5385143,66.0176154 34.5637208,64.366822 40.1939394,62.8874674 C39.9933393,62.3969171 39.8349374,61.8811235 39.7239712,61.3436237 Z"
						/>
						<path
							fill="#FFD94C"
							d="M80.3968824,64 L109.608177,64 C111.399254,64 113.053521,64.958025 113.944933,66.5115174 L128.577138,92.0115174 C129.461464,93.5526583 129.461464,95.4473417 128.577138,96.9884826 L113.944933,122.488483 C113.053521,124.041975 111.399254,125 109.608177,125 L80.3968824,125 C78.6058059,125 76.9515387,124.041975 76.0601262,122.488483 L61.4279211,96.9884826 C60.543596,95.4473417 60.543596,93.5526583 61.4279211,92.0115174 L76.0601262,66.5115174 C76.9515387,64.958025 78.6058059,64 80.3968824,64 Z M105.987827,70.2765273 C107.779849,70.2765273 109.434839,71.2355558 110.325899,72.7903404 L121.343038,92.0138131 C122.225607,93.5537825 122.225607,95.4462175 121.343038,96.9861869 L110.325899,116.20966 C109.434839,117.764444 107.779849,118.723473 105.987827,118.723473 L84.0172329,118.723473 C82.2252106,118.723473 80.5702207,117.764444 79.6791602,116.20966 L68.6620219,96.9861869 C67.7794521,95.4462175 67.7794521,93.5537825 68.6620219,92.0138131 L79.6791602,72.7903404 C80.5702207,71.2355558 82.2252106,70.2765273 84.0172329,70.2765273 L105.987827,70.2765273 Z M102.080648,77.1414791 L87.9244113,77.1414791 C86.1342282,77.1414791 84.4806439,78.0985567 83.5888998,79.6508285 L83.5888998,79.6508285 L76.4892166,92.0093494 C75.6032319,93.5515958 75.6032319,95.4484042 76.4892166,96.9906506 L76.4892166,96.9906506 L83.5888998,109.349172 C84.4806439,110.901443 86.1342282,111.858521 87.9244113,111.858521 L87.9244113,111.858521 L102.080648,111.858521 C103.870831,111.858521 105.524416,110.901443 106.41616,109.349172 L106.41616,109.349172 L113.515843,96.9906506 C114.401828,95.4484042 114.401828,93.5515958 113.515843,92.0093494 L113.515843,92.0093494 L106.41616,79.6508285 C105.524416,78.0985567 103.870831,77.1414791 102.080648,77.1414791 L102.080648,77.1414791 Z M98.3191856,83.7122186 C100.108028,83.7122186 101.760587,84.6678753 102.652827,86.2183156 L105.983552,92.0060969 C106.87203,93.5500005 106.87203,95.4499995 105.983552,96.9939031 L102.652827,102.781684 C101.760587,104.332125 100.108028,105.287781 98.3191856,105.287781 L91.685874,105.287781 C89.8970316,105.287781 88.2444725,104.332125 87.3522326,102.781684 L84.021508,96.9939031 C83.1330298,95.4499995 83.1330298,93.5500005 84.021508,92.0060969 L87.3522326,86.2183156 C88.2444725,84.6678753 89.8970316,83.7122186 91.685874,83.7122186 L98.3191856,83.7122186 Z M95.0037937,90.1848875 C93.459294,90.1848875 92.0343817,91.0072828 91.2630046,92.3424437 C90.4917325,93.6774232 90.4917325,95.3225768 91.2630046,96.6575563 C92.0343817,97.9927172 93.459294,98.8151125 95.0012659,98.8151125 L95.0012659,98.8151125 C96.5457656,98.8151125 97.9706779,97.9927172 98.7420549,96.6575563 C99.5133271,95.3225768 99.5133271,93.6774232 98.7420549,92.3424437 C97.9706779,91.0072828 96.5457656,90.1848875 95.0037937,90.1848875 L95.0037937,90.1848875 Z M60,94.5009646 L67.7677636,94.5009646"
						/>
						<path
							fill="#FF4154"
							d="M54.8601729,108.357758 C56.1715224,107.608286 57.8360246,108.074601 58.5779424,109.399303 L58.5779424,109.399303 L59.0525843,110.24352 C62.8563392,116.982993 66.8190116,123.380176 70.9406016,129.435068 C75.8078808,136.585427 81.28184,143.82411 87.3624792,151.151115 C88.3168778,152.30114 88.1849437,154.011176 87.065686,154.997937 L87.065686,154.997937 L86.4542085,155.534625 C66.3465389,173.103314 53.2778188,176.612552 47.2480482,166.062341 C41.3500652,155.742717 43.4844915,136.982888 53.6513274,109.782853 C53.876818,109.179582 54.3045861,108.675291 54.8601729,108.357758 Z M140.534177,129.041504 C141.986131,128.785177 143.375496,129.742138 143.65963,131.194242 L143.65963,131.194242 L143.812815,131.986376 C148.782365,157.995459 145.283348,171 133.315764,171 C121.609745,171 106.708724,159.909007 88.6127018,137.727022 C88.2113495,137.235047 87.9945723,136.617371 88,135.981509 C88.013158,134.480686 89.2357854,133.274651 90.730918,133.287756 L90.730918,133.287756 L91.6846544,133.294531 C99.3056979,133.335994 106.714387,133.071591 113.910723,132.501323 C122.409039,131.82788 131.283523,130.674607 140.534177,129.041504 Z M147.408726,73.8119663 C147.932139,72.4026903 149.508386,71.6634537 150.954581,72.149012 L150.954581,72.149012 L151.742552,72.4154854 C177.583763,81.217922 187.402356,90.8916805 181.198332,101.436761 C175.129904,111.751366 157.484347,119.260339 128.26166,123.963678 C127.613529,124.067994 126.948643,123.945969 126.382735,123.618843 C125.047025,122.846729 124.602046,121.158214 125.388848,119.847438 L125.388848,119.847438 L125.889328,119.0105 C129.877183,112.31633 133.481358,105.654262 136.701854,99.0242957 C140.50501,91.1948179 144.073967,82.7907081 147.408726,73.8119663 Z M61.7383398,66.0363218 C62.3864708,65.9320063 63.0513565,66.0540315 63.6172646,66.3811573 C64.9529754,67.153271 65.3979538,68.8417862 64.6111517,70.1525615 L64.6111517,70.1525615 L64.1106718,70.9895001 C60.1228168,77.6836699 56.5186416,84.3457379 53.2981462,90.9757043 C49.49499,98.8051821 45.9260328,107.209292 42.5912744,116.188034 C42.0678608,117.59731 40.4916142,118.336546 39.045419,117.850988 L39.045419,117.850988 L38.2574475,117.584515 C12.4162372,108.782078 2.59764398,99.1083195 8.80166786,88.5632391 C14.8700957,78.2486335 32.515653,70.7396611 61.7383398,66.0363218 Z M103.545792,34.4653746 C123.653461,16.8966864 136.722181,13.3874478 142.751952,23.9376587 C148.649935,34.2572826 146.515508,53.0171122 136.348673,80.2171474 C136.123182,80.8204179 135.695414,81.324709 135.139827,81.6422422 C133.828478,82.3917144 132.163975,81.9253986 131.422058,80.6006966 L131.422058,80.6006966 L130.947416,79.7564798 C127.143661,73.0170065 123.180988,66.6198239 119.059398,60.564932 C114.192119,53.4145727 108.71816,46.1758903 102.637521,38.8488847 C101.683122,37.6988602 101.815056,35.9888243 102.934314,35.0020629 L102.934314,35.0020629 Z M57.6842361,18 C69.3902551,18 84.2912758,29.0909926 102.387298,51.2729777 C102.788651,51.7649527 103.005428,52.3826288 103,53.0184911 C102.986842,54.5193144 101.764215,55.7253489 100.269082,55.7122445 L100.269082,55.7122445 L99.3153456,55.7054689 C91.6943021,55.6640063 84.2856126,55.9284091 77.0892772,56.4986773 C68.5909612,57.17212 59.7164767,58.325393 50.4658235,59.9584962 C49.0138691,60.2148231 47.6245044,59.2578618 47.3403697,57.805758 L47.3403697,57.805758 L47.1871846,57.0136235 C42.2176347,31.0045412 45.7166519,18 57.6842361,18 Z"
						/>
					</g>
				</g>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				role="img"
				height="30"
				width="30"
				fill="currentColor"
				className="h-6 w-6"
			>
				<title>Tailwind CSS</title>
				<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 32 32"
				preserveAspectRatio="xMidYMid"
				fill="currentColor"
				role="img"
				className="h-6 w-6"
			>
				<title>Node.js</title>
				<path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="30"
				height="30"
				role="img"
				fill="currentColor"
				className="h-6 w-6"
			>
				<title>Figma</title>
				<path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 598.88 1333.33"
				shapeRendering="geometricPrecision"
				textRendering="geometricPrecision"
				width="30"
				height="30"
				imageRendering="optimizeQuality"
				fillRule="evenodd"
				clipRule="evenodd"
			>
				<g fillRule="nonzero">
					<title>Mongo DB</title>
					<path
						d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"
						fill="#599636"
					/>
					<path
						d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"
						fill="#6cac48"
					/>
					<path
						d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"
						fill="#c2bfbf"
					/>
				</g>
			</svg>
		</div>
	);
}

export default CurrentFavTech;
