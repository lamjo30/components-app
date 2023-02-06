<script setup>
  import { onMounted } from 'vue'
  import { 
      initAccordions, 
      initCarousels, 
      initCollapses, 
      initDials, 
      initDismisses, 
      initDrawers, 
      initDropdowns, 
      initModals, 
      initPopovers, 
      initTabs, 
      initTooltips } from 'flowbite'

  // initialize components based on data attribute selectors
  onMounted(() => {
      initAccordions();
      initCarousels();
      initCollapses();
      initDials();
      initDismisses();
      initDrawers();
      initDropdowns();
      initModals();
      initPopovers();
      initTabs();
      initTooltips();
  })
</script>
<template>
    <div class="grid grid-cols-12 justify-content-center m-5 gap-3">
        <div class="col-span-4">
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <span class="mb-2 text-sm font-medium tracking-tight text-gray-500 dark:text-white">31/01/2023</span>
                    <h5 class="text-base font-bold tracking-tight text-gray-700 dark:text-white mb-2">BIMABSG22152</h5>
                </a>
                <hr/>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Tipo de expediente</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">ADMINISTRACIÓN</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Puerto</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">PUERTO DE BATA</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Buque</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">NORDIC MACAU</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Consignatario de buque</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">DELTAMAR, S.A.</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Cliente</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">MARGUISA SHIPPING LINES, S.L.U.</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Contacto de Cliente</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">a.naranjo@spmgm.com</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Viaje</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">I: 0BQBEN1M,E: 0BQBNS1M</h5>
                    </div>
                    <div class="col-span-auto text-center mt-5">
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                

            </div>
        </div>
        <div class="col-span-4">
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <span class="mb-2 text-sm font-medium tracking-tight text-gray-500 dark:text-white">31/01/2023</span>
                    <h5 class="text-base font-bold tracking-tight text-gray-700 dark:text-white mb-2">BIMABSG22152</h5>
                </a>
                <hr/>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Tipo de expediente</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">ADMINISTRACIÓN</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Puerto</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">PUERTO DE BATA</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Buque</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">NORDIC MACAU</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Consignatario de buque</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">DELTAMAR, S.A.</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Cliente</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">MARGUISA SHIPPING LINES, S.L.U.</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Contacto de Cliente</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">a.naranjo@spmgm.com</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Viaje</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">I: 0BQBEN1M,E: 0BQBNS1M</h5>
                    </div>
                    <div class="col-span-auto text-center mt-5">
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                

            </div>
        </div>
        <div class="col-span-4">
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <span class="mb-2 text-sm font-medium tracking-tight text-gray-500 dark:text-white">31/01/2023</span>
                    <h5 class="text-base font-bold tracking-tight text-gray-700 dark:text-white mb-2">BIMABSG22152</h5>
                </a>
                <hr/>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Tipo de expediente</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">ADMINISTRACIÓN</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Puerto</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">PUERTO DE BATA</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Buque</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">NORDIC MACAU</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Consignatario de buque</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">DELTAMAR, S.A.</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Cliente</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">MARGUISA SHIPPING LINES, S.L.U.</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Contacto de Cliente</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">a.naranjo@spmgm.com</h5>
                    </div>
                    <div class="col-span-auto">
                        <span class="text-sm font-mediun tracking-tight text-gray-400 dark:text-white">Viaje</span>
                        <h5 class="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">I: 0BQBEN1M,E: 0BQBNS1M</h5>
                    </div>
                    <div class="col-span-auto text-center mt-5">
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                

            </div>
        </div> 
    </div>
</template>