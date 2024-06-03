from bs4 import BeautifulSoup

html = """
<div class="views-view-grid horizontal cols-4 clearfix">
            <div class="row">
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            <div class="pdfpreview" id="pdfpreview-721669">
  <span class="pdfpreview-image-wrapper">
    <a href="/manuscripts/ramayan" hreflang="en"><img class="pdfpreview-file" src="/sites/default/files/styles/pdf_thumbnail/public/pdfpreview/721669-HL%20643.png?itok=qEGSzT6S" typeof="Image" width="400" height="400">

</a>

  </span>
  </div>

                            
                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title=".رامایان"><a href="/manuscripts/ramayan" hreflang="en">.رامایان</a> </h2>
<p class="text-truncate"><b>Author:</b> Masih, Hakim Ruknuddin Masud
مسیح ، حکیم رکن الدین مسعود</p>
                        <p class="text-truncate"><b>Organisation:</b> Khuda Bakhsh Oriental Public Library</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-book statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-4dad6f527b010b56d19eccb10c09ee69721884bb9b193404125c23502d8118a6">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2797263">
        <a title="Like" data-entity-id="2797263" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">9</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2797263">
        <a title="Dislike" data-entity-id="2797263" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-78df9da0c37d6e37b9c4cacb7bb83cbaf8ad39b77488c1432017dcb569451f0d">
  
  
  

  
  
  

      <div class="views-row"><div><span>727</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/jyotisha-ratnasangraha" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/13735/alh_ald-AM-MSS-95-80-13575_01_h.jpg?itok=nCUfahOR" alt="alh_ald-AM-MSS-95-80-13575_01_h.jpg" title="alh_ald-AM-MSS-95-80-13575_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="(Jyotisha) Ratnasangraha"><a href="/manuscripts/jyotisha-ratnasangraha" hreflang="en">(Jyotisha) Ratnasangraha</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-f9f9a09bf5b94f901cab91b65816c18d463df40a3f4f8d252ccab93fef8c0d7f">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2698538">
        <a title="Like" data-entity-id="2698538" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">27</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2698538">
        <a title="Dislike" data-entity-id="2698538" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-b13d783c49541a6da216f588874e59b1e9e711817d7fa385c70c79d391582f5d">
  
  
  

  
  
  

      <div class="views-row"><div><span>1,768</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/muhurttachinatamani-yatraprakarana" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/12179/alh_ald-AM-MSS-102-191-14071_01_h.jpg?itok=eOnbKSMo" alt="alh_ald-AM-MSS-102-191-14071_01_h.jpg" title="alh_ald-AM-MSS-102-191-14071_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="(Muhurttachinatamani) Yatraprakarana"><a href="/manuscripts/muhurttachinatamani-yatraprakarana" hreflang="en">(Muhurttachinatamani) Yatraprakarana</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-f978d7a22333ed893fa8fca071c454dbd1f51cc533b370b67e8d5cadeefefcf3">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2697804">
        <a title="Like" data-entity-id="2697804" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">14</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2697804">
        <a title="Dislike" data-entity-id="2697804" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-6a9d6ffe9fdaa56aa4bd61396482f00965877b0b0d5513d4104e5e18dcdee5dc">
  
  
  

  
  
  

      <div class="views-row"><div><span>482</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1-dvadasa-bhavavichara-bhuvane-saphala-phalam-etc-2-adityavara-vidhi" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/21419/alh_ald-AM-MSS-108-470-14877_01_h.jpg?itok=rrBo4-US" alt="alh_ald-AM-MSS-108-470-14877_01_h.jpg" title="alh_ald-AM-MSS-108-470-14877_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1 Dvadasa Bhavavichara (Bhuvane Saphala Phalam etc) 2 Adityavara Vidhi"><a href="/manuscripts/1-dvadasa-bhavavichara-bhuvane-saphala-phalam-etc-2-adityavara-vidhi" hreflang="en">1 Dvadasa Bhavavichara (Bhuvane Saphala Phalam etc) 2 Adityavara Vidhi</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-5cbefa632573271864dec42170c4bcfc604d390d2c0e2a71c1465289db969259">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2702234">
        <a title="Like" data-entity-id="2702234" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">10</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2702234">
        <a title="Dislike" data-entity-id="2702234" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-48bf92af34bd0926a5c63e15acf7cea8a2bd7ae3255e4eb68ff52c7fdf222d8d">
  
  
  

  
  
  

      <div class="views-row"><div><span>185</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
              </div>
          <div class="row">
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1-grahanam-phalani-2-patali" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/19399/alh_ald-AM-MSS-104-341-14643_01_h.jpg?itok=TiUDe27h" alt="alh_ald-AM-MSS-104-341-14643_01_h.jpg" title="alh_ald-AM-MSS-104-341-14643_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1 Grahanam Phalani, 2 Patali"><a href="/manuscripts/1-grahanam-phalani-2-patali" hreflang="en">1 Grahanam Phalani, 2 Patali</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-ed5275685847902d3cd4c273067e183cb0147c5244fce1434d953bd0f21a4998">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2701373">
        <a title="Like" data-entity-id="2701373" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">9</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2701373">
        <a title="Dislike" data-entity-id="2701373" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-15fdc15e9ab48d4ef891be86a1461eee844f94896251134a79bf0e7c6c4ebba1">
  
  
  

  
  
  

      <div class="views-row"><div><span>101</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1-hanumat-kavach-2-ramakavitavali-tulsikrita-written-lachhimamadasa" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/14227/alh_ald-AM-MSS-217-33-18310_01_h.jpg?itok=48l8KbOg" alt="alh_ald-AM-MSS-217-33-18310_01_h.jpg" title="alh_ald-AM-MSS-217-33-18310_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1 Hanumat Kavach 2 Ramakavitavali Tulsikrita Written by Lachhimamadasa"><a href="/manuscripts/1-hanumat-kavach-2-ramakavitavali-tulsikrita-written-lachhimamadasa" hreflang="en">1 Hanumat Kavach 2 Ramakavitavali Tulsikrita Written by Lachhimamadasa</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-4c40239c90cb17d6d5966ecfdd39ae13addc8d836e16bd89887b854d79a65659">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2699279">
        <a title="Like" data-entity-id="2699279" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">27</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2699279">
        <a title="Dislike" data-entity-id="2699279" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-1b9e5b52be2492486e6b68da93fe34a8f8fe132879e70dab2cb6c146c06d61a9">
  
  
  

  
  
  

      <div class="views-row"><div><span>1,024</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1-kupachakra2-dadima-phalasyanama" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/12167/alh_ald-AM-MSS-101-179-14051_01_h.jpg?itok=vone5Fcv" alt="alh_ald-AM-MSS-101-179-14051_01_h.jpg" title="alh_ald-AM-MSS-101-179-14051_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1 Kupachakra,2 Dadima Phalasyanama"><a href="/manuscripts/1-kupachakra2-dadima-phalasyanama" hreflang="en">1 Kupachakra,2 Dadima Phalasyanama</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-95f5df8f967a4e5a15379ab64dd9d7ad1e525c19fd31ce9cbd58d29eb542e31c">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2697782">
        <a title="Like" data-entity-id="2697782" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">8</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2697782">
        <a title="Dislike" data-entity-id="2697782" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-6ebe927ea44219ae37119d3c4e7d25fdde39415308bb38488e0bc41f0bd784e4">
  
  
  

  
  
  

      <div class="views-row"><div><span>72</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1-lagna-2-paramo-miti" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/16109/alh_ald-AM-MSS-234-520-18834_01_h.jpg?itok=xwVxAopx" alt="alh_ald-AM-MSS-234-520-18834_01_h.jpg" title="alh_ald-AM-MSS-234-520-18834_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1 Lagna 2 Paramo Miti"><a href="/manuscripts/1-lagna-2-paramo-miti" hreflang="en">1 Lagna 2 Paramo Miti</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-29e66ad0e59f16a36b8f0e10b3049ebfc5efc52fa162c39f77d2a792a4e9b72d">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2699159">
        <a title="Like" data-entity-id="2699159" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">9</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2699159">
        <a title="Dislike" data-entity-id="2699159" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-ec3c77c750abaf9b88297bafee6993b04420ac284698e5681bd260933b5f5de8">
  
  
  

  
  
  

      <div class="views-row"><div><span>192</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
              </div>
          <div class="row">
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1-muhurttamala-2-shashtiravastha-disasvarachakra-etc" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/21428/alh_ald-AM-MSS-108-479-14890_01_h.jpg?itok=hlIfitrQ" alt="alh_ald-AM-MSS-108-479-14890_01_h.jpg" title="alh_ald-AM-MSS-108-479-14890_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1 Muhurttamala, 2 Shashtiravastha, Disasvarachakra etc"><a href="/manuscripts/1-muhurttamala-2-shashtiravastha-disasvarachakra-etc" hreflang="en">1 Muhurttamala, 2 Shashtiravastha, Disasvarachakra etc</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-b5f763d05c5cac94837f5ccee80e9a46f89b711b01481ed1b4703b89dfad2ed4">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2702246">
        <a title="Like" data-entity-id="2702246" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">6</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2702246">
        <a title="Dislike" data-entity-id="2702246" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-4e877aab2ec8739e28beb0c64f01b2b8040e765a518facee7ad85765bc55b33c">
  
  
  

  
  
  

      <div class="views-row"><div><span>169</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1-pravandhyukta-tirumantrartha-2-gaprasatva" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/13458/alh_ald-AM-MSS-90-62-13247_01_h.jpg?itok=QZvfIrFx" alt="alh_ald-AM-MSS-90-62-13247_01_h.jpg" title="alh_ald-AM-MSS-90-62-13247_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1. Pravandhyukta Tirumantrartha 2. Gaprasatva"><a href="/manuscripts/1-pravandhyukta-tirumantrartha-2-gaprasatva" hreflang="en">1. Pravandhyukta Tirumantrartha 2. Gaprasatva</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-5ab283f8e680eee49dd654d73a3035ff043f796e2475b6e8ed58afdc6f885241">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2699038">
        <a title="Like" data-entity-id="2699038" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">5</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2699038">
        <a title="Dislike" data-entity-id="2699038" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-7b60975f3d730eceb78f9040254285f7be7a61f5272b43f7a074fdd2af4a4b58">
  
  
  

  
  
  

      <div class="views-row"><div><span>182</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1gangatika-2-vedanta-sambandhi-patra" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/12375/alh_ald-AM-MSS-85A-2604-13104_01_h.jpg?itok=3lSvyP0_" alt="alh_ald-AM-MSS-85A-2604-13104_01_h.jpg" title="alh_ald-AM-MSS-85A-2604-13104_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1.Gangatika 2. Vedanta Sambandhi Patra"><a href="/manuscripts/1gangatika-2-vedanta-sambandhi-patra" hreflang="en">1.Gangatika 2. Vedanta Sambandhi Patra</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-634baf5e0b9547bf0bbbe93f34358e792885e7131ed4baf35b75a3ed39f34d84">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2698026">
        <a title="Like" data-entity-id="2698026" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">8</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2698026">
        <a title="Dislike" data-entity-id="2698026" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-9af87015cab56d0b589d226892b5ad8d00fc7045a4f11dff4ff1e945ae9d2656">
  
  
  

  
  
  

      <div class="views-row"><div><span>185</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1lilavati-2janmakale" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/13837/alh_ald-AM-MSS-96-93-13588_01_h.jpg?itok=7t13Roqi" alt="alh_ald-AM-MSS-96-93-13588_01_h.jpg" title="alh_ald-AM-MSS-96-93-13588_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1.Lilavati 2.Janmakale"><a href="/manuscripts/1lilavati-2janmakale" hreflang="en">1.Lilavati 2.Janmakale</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-a6395c8b8d277105d6af4f7e759cd259d969347265d67abae325a8bf658e59ef">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2699066">
        <a title="Like" data-entity-id="2699066" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">12</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2699066">
        <a title="Dislike" data-entity-id="2699066" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-d1039c4e3e8229e5d6cf79f44bd07b1089b2bae969eb2056a0c35336f3663583">
  
  
  

  
  
  

      <div class="views-row"><div><span>373</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
              </div>
          <div class="row">
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/1sri-hitashta-2radha-stotra" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/13186/alh_ald-AM-MSS-80-2180-12622_01_h.jpg?itok=pS6B_FEP" alt="alh_ald-AM-MSS-80-2180-12622_01_h.jpg" title="alh_ald-AM-MSS-80-2180-12622_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="1Sri Hitashta 2Radha Stotra"><a href="/manuscripts/1sri-hitashta-2radha-stotra" hreflang="en">1Sri Hitashta 2Radha Stotra</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> Allahabad Museum</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-123061158eba894b118a9de32c741a7b0e6698b8edc2dbc7cc0244e1e03d287a">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2698656">
        <a title="Like" data-entity-id="2698656" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">9</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2698656">
        <a title="Dislike" data-entity-id="2698656" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-e2e9d950037fa264835a0d9fae09c4a4496b596f54a2806215d0ada5bd4514af">
  
  
  

  
  
  

      <div class="views-row"><div><span>132</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/book-history-villages-kashmir" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/ICrarebooks//moirepository/33529/nat_del-57-106-16-23036_01_h.jpg?itok=HcKs7DGs" alt="nat_del-57-106-16-23036_01_h.jpg" title="nat_del-57-106-16-23036_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="A Book on History of Villages in Kashmir"><a href="/manuscripts/book-history-villages-kashmir" hreflang="en">A Book on History of Villages in Kashmir</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> National Museum, New Delhi</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-580016d2d2369a42e58e3a5b25b087ef6a9aaca8dcb4e248908b94edd79403a0">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2848414">
        <a title="Like" data-entity-id="2848414" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">0</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2848414">
        <a title="Dislike" data-entity-id="2848414" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-f8522d4510432fda87664de2878644b5bdefe54a0ad5a7703a1ba018aefdf4e9">
  
  
  

  
  
  

      <div class="views-row"><div><span>167</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/commentary-adhyatmaramayana" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/ICrarebooks//moirepository/33530/nat_del-57-106-17-22971_01_h.jpg?itok=HjZM3bpr" alt="nat_del-57-106-17-22971_01_h.jpg" title="nat_del-57-106-17-22971_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="A Commentary on Adhyatmaramayana"><a href="/manuscripts/commentary-adhyatmaramayana" hreflang="en">A Commentary on Adhyatmaramayana</a> </h2>
<p class="text-truncate"><b>Author:</b> Sri Ramavarma</p>
                        <p class="text-truncate"><b>Organisation:</b> National Museum, New Delhi</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-e91c3785ad3af824fc6c89e72a5d31d0fc87c9b968d138c4ceee354de11bf471">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2848398">
        <a title="Like" data-entity-id="2848398" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">0</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2848398">
        <a title="Dislike" data-entity-id="2848398" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-2d58f9e10872105e4728e582024a0c85599ae03fa73ace9eb9ca898fbcdc5866">
  
  
  

  
  
  

      <div class="views-row"><div><span>166</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
                  <div class="col-xs-6 col-lg-3 item p-1 grid-group-item"><div class="databox">      
                         <div class="banner-img">
                            
                              <a href="/manuscripts/commentary-amarkosha-lexicon-sanskrit" hreflang="en"><img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/ICrarebooks//moirepository/33526/nat_del-57-106-13-22968_01_h.jpg?itok=h64rIvId" alt="nat_del-57-106-13-22968_01_h.jpg" title="nat_del-57-106-13-22968_01_h.jpg" typeof="Image" width="400" height="250">

</a>

                        </div>
                         <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="A Commentary on Amarkosha (A Lexicon in Sanskrit)"><a href="/manuscripts/commentary-amarkosha-lexicon-sanskrit" hreflang="en">A Commentary on Amarkosha (A Lexicon in Sanskrit)</a> </h2>

                        <p class="text-truncate"><b>Organisation:</b> National Museum, New Delhi</p>
                        <div class="stats">
		            <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                            <div class="col-md-5 col-xs-5 p-0"> <div class="views-element-container"><div class="js-view-dom-id-8e0745115bfce1f597fdf27e5a8aedf38924b3a04e959e56b6c373d1341b5172">
  
  
  

  
  
  

      <div class="views-row"><div class="views-field views-field-like-and-dislike"><span class="field-content"><div class="vote-widget-wrapper">
  <div class="vote-widget vote-widget--like-and-dislike">
          <div class="vote-like type-node" id="like-container-node-2848382">
        <a title="Like" data-entity-id="2848382" data-entity-type="node" class="disable-status">Like</a>
        <span class="count">0</span>
      </div>
          <div class="vote-dislike type-node" id="dislike-container-node-2848382">
        <a title="Dislike" data-entity-id="2848382" data-entity-type="node" class="disable-status">Dislike</a>
        <span class="count">0</span>
      </div>
      </div>
</div>
</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                            <div class="col-md-4 col-xs-4 p-0 views-icon"> <div class="views-element-container"><div class="js-view-dom-id-90b7644aa524e43fdc39d0736492e59f7cda02f309b462b1881a9eb62ad0ff4b">
  
  
  

  
  
  

      <div class="views-row"><div><span>64</span></div></div>

    

  
  

  
  
</div>
</div>
 </div>
                        </div>  
                </div></div>
              </div>
      </div>
"""

# Parse the HTML content
soup = BeautifulSoup(html, 'html.parser')

# Extract data from each <div> with class "databox"
databox_divs = soup.find_all('div', class_='databox')
for databox in databox_divs:
    title = databox.find('h2').text.strip()
    author = databox.find('p', string='Author:').find_next('p').text.strip()
    organization = databox.find('p', string='Organisation:').find_next('p').text.strip()
    like_count = databox.find('div', class_='vote-like type-node').find('span', class_='count').text.strip()
    dislike_count = databox.find('div', class_='vote-dislike type-node').find('span', class_='count').text.strip()

    print("Title:", title)
    print("Author:", author)
    print("Organization:", organization)
    print("Like Count:", like_count)
    print("Dislike Count:", dislike_count)
    print("\n")
