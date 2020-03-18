export default {
  template: `
    
        <div id="app">
    
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/films">Films</router-link>
          </nav>
        
          <main>
            <router-view />
    
          </main>
    
        </div>
    
      `
};
