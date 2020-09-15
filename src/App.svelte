<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Navbar from './components/Navbar.svelte'
  import Home from './pages/Home.svelte'

  const basepath = process.env.NODE_ENV === 'production' ? '/zima' : '/'
</script>

<div class="app">
  <div class="app__inner">
    <Header />
    <Navbar />
    <main class="main">
      <Router {basepath}>
        <Route path="/" component={Home} />
      </Router>
    </main>
    <Footer />
  </div>
</div>
