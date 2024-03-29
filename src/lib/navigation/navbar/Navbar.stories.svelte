<script>
	import Button from '../../actions/button/Button.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Navbar from './Navbar.svelte';
	import Link from '../link/Link.svelte';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Navigation/Navbar"
	component={Navbar}
	argTypes={{
		label: { control: 'text' },
		textColor: { control: 'color' },
	}}
/>

<Template let:args>
	<Navbar {...args}>
		<slot />
	</Navbar>
</Template>

<Story name="Navbar with title only">
	<Navbar class="bg-base-100">
		<Link prefix="btn" ghost class="normal-case text-xl">daisyUI</Link>
	</Navbar>
</Story>

<Story name="Navbar with title and icon">
	<Navbar class="bg-base-100">
		<div class="flex-1">
			<Link prefix="btn" ghost class="normal-case text-xl">daisyUI</Link>
		</div>
		<div class="flex-none">
			<Button square ghost>
				<!-- prettier-ignore -->
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
			</Button>
		</div>
	</Navbar>
</Story>

<Story name="Navbar with icon at start and end">
	<Navbar class="bg-base-100">
		<div class="flex-none">
			<Button square ghost>
				<!-- prettier-ignore -->
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
			</Button>
		</div>
		<div class="flex-1">
			<Link prefix="btn" ghost class="normal-case text-xl">daisyUI</Link>
		</div>
		<div class="flex-none">
			<Button square ghost>
				<!-- prettier-ignore -->
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
			</Button>
		</div>
	</Navbar>
</Story>

<Story name="Navbar with menu and submenu">
	<Navbar class="bg-base-100">
		<div class="flex-1">
			<Link prefix="btn" ghost class="normal-case text-xl">daisyUI</Link>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal p-0">
				<li><Link>Item 1</Link></li>
				<li tabindex="0">
					<Link>
						Parent
						<!-- prettier-ignore -->
						<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
					</Link>
					<ul class="p-2 bg-base-100">
						<li><Link>Submenu 1</Link></li>
						<li><Link>Submenu 2</Link></li>
					</ul>
				</li>
				<li><Link>Item 3</Link></li>
			</ul>
		</div>
	</Navbar>
</Story>

<Story name="Navbar with search input and dropdown">
	<Navbar class="bg-base-100">
		<div class="flex-1">
			<Link prefix="btn" ghost class="normal-case text-xl">daisyUI</Link>
		</div>
		<div class="flex-none gap-2">
			<div class="form-control">
				<input
					type="text"
					placeholder="Search"
					class="input input-bordered"
				/>
			</div>
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img src="https://placeimg.com/80/80/people" />
					</div>
				</label>
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<Link class="justify-between">
							Profile
							<span class="badge">New</span>
						</Link>
					</li>
					<li><Link>Settings</Link></li>
					<li><Link>Logout</Link></li>
				</ul>
			</div>
		</div>
	</Navbar>
</Story>

<Story name="Navbar with icon, indicator and dropdown">
	<Navbar class="bg-base-100">
		<div class="flex-1">
			<Link prefix="btn" ghost class="normal-case text-xl">daisyUI</Link>
		</div>
		<div class="flex-none">
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<div class="indicator">
						<!-- prettier-ignore -->
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
						<span class="badge badge-sm indicator-item">8</span>
					</div>
				</label>
				<!-- prettier-ignore -->
				<div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
					<div class="card-body">
						<span class="font-bold text-lg">8 Items</span>
						<span class="text-info">Subtotal: $999</span>
						<div class="card-actions">
							<button class="btn btn-primary btn-block">View cart</button>
						</div>
					</div>
				</div>
			</div>
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img src="https://placeimg.com/80/80/people" />
					</div>
				</label>
				<!-- prettier-ignore -->
				<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
					<li>
						<Link class="justify-between">
							Profile
							<span class="badge">New</span>
						</Link>
					</li>
					<li><Link>Settings</Link></li>
					<li><Link>Logout</Link></li>
				</ul>
			</div>
		</div>
	</Navbar>
</Story>

<Story name="Navbar with dropdown, center logo and icon">
	<Navbar class="bg-base-100">
		<Navbar start>
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><Link>Homepage</Link></li>
					<li><Link>Portfolio</Link></li>
					<li><Link>About</Link></li>
				</ul>
			</div>
		</Navbar>
		<Navbar center>
			<Link prefix="btn" ghost class="normal-case text-xl">daisyUI</Link>
		</Navbar>
		<Navbar end>
			<button class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/></svg
				>
			</button>
			<button class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/></svg
					>
					<span class="badge badge-xs badge-primary indicator-item" />
				</div>
			</button>
		</Navbar>
	</Navbar>
</Story>
<!-- prettier-ignore -->
<Story name="responsive (dropdown menu on small screen, center menu on large screen)">
	<Navbar class="bg-base-100">
		<Navbar start>
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><Link>Item 1</Link></li>
					<li tabindex="0">
						<Link class="justify-between">
							Parent
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								><path
									d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
								/></svg
							>
						</Link>
						<ul class="p-2">
							<li><Link>Submenu 1</Link></li>
							<li><Link>Submenu 2</Link></li>
						</ul>
					</li>
					<li><Link>Item 3</Link></li>
				</ul>
			</div>
			<Link prefix="btn" ghost class="normal-case text-xl">daisyUI</Link>
		</Navbar>
		<Navbar center class="hidden lg:flex">
			<ul class="menu menu-horizontal p-0">
				<li><Link>Item 1</Link></li>
				<li tabindex="0">
					<Link>
						Parent
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path
								d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
							/></svg
						>
					</Link>
					<ul class="p-2">
						<li><Link>Submenu 1</Link></li>
						<li><Link>Submenu 2</Link></li>
					</ul>
				</li>
				<li><Link>Item 3</Link></li>
			</ul>
		</Navbar>
		<Navbar end>
			<Link prefix="btn">Get started</Link>
		</Navbar>
	</Navbar>
</Story>

<Story name="Navbar with colors">
	<Navbar class="bg-neutral text-neutral-content">
		<Link prefix="btn" ghost class="normal-case text-xl" label="daisyUI" />
	</Navbar>
	<Navbar class="bg-base-300">
		<Link prefix="btn" ghost class="normal-case text-xl" label="daisyUI" />
	</Navbar>
	<Navbar class="bg-primary text-primary-conte">
		<Link prefix="btn" ghost class="normal-case text-xl" label="daisyUI" />
	</Navbar>
</Story>
