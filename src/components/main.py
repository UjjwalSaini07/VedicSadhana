from bs4 import BeautifulSoup

html = """
<div class="views-view-grid horizontal cols-4 clearfix">
    <div class="row">
        <div class="col-xs-6 col-lg-3 item p-1 grid-group-item">
            <div class="databox">      
                <div class="banner-img">
                    <a href="/manuscripts/radhakrishna" hreflang="en">
                        <img src="/system/files/styles/image_grid_style/private/digitalFilesICWeb/moirepository/13736/alh_ald-AM-MSS-96-81-13576_01_h.jpg?itok=nCUfahOR" alt="alh_ald-AM-MSS-96-81-13576_01_h.jpg" title="alh_ald-AM-MSS-96-81-13576_01_h.jpg" typeof="Image" width="400" height="250">
                    </a>
                </div>
                <h2 class="text-truncate" data-toggle="tooltip" title="" data-original-title="Radhakrishna">
                    <a href="/manuscripts/radhakrishna" hreflang="en">Radhakrishna</a> 
                </h2>
                <p class="text-truncate"><b>Organisation:</b> Vrindavan</p>
                <div class="stats">
                    <div class="col-md-3 col-xs-3 p-0"><i class="fa fa-file-image-o statsicon"></i></div>
                    <div class="col-md-5 col-xs-5 p-0">
                        <div class="views-element-container">
                            <div class="vote-widget vote-widget--like-and-dislike">
                                <div class="vote-like type-node">
                                    <span class="count">15</span>
                                </div>
                                <div class="vote-dislike type-node">
                                    <span class="count">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-4 p-0 views-icon">
                        <div class="views-element-container">
                            <div><span>350</span></div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</div>
"""

# Parse the HTML content
soup = BeautifulSoup(html, 'html.parser')

# Extract data from each <div> with class "databox"
databox_divs = soup.find_all('div', class_='databox')

for databox in databox_divs:
    title = databox.find('h2').text.strip()
    author = databox.find('p', text=lambda x: x and "Author:" in x)
    organization = databox.find('p', text=lambda x: x and "Organisation:" in x).text.replace("Organisation:", "").strip()
    like_count = databox.find('div', class_='vote-like').find('span', class_='count').text.strip()
    dislike_count = databox.find('div', class_='vote-dislike').find('span', class_='count').text.strip()
    
    print(f"Title: {title}")
    print(f"Author: {author}")
    print(f"Organization: {organization}")
    print(f"Like Count: {like_count}")
    print(f"Dislike Count: {dislike_count}")
    print("\n")
