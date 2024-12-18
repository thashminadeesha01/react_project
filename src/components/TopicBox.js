import React from 'react';
import './topicbox.css';

function TopicBox(props) {
    return (
        <div>
            <div className="topic">
                <h4>Discover the beauty<br /> around the world</h4>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Faucibus in libero risus semper<br /> habitant arcu eget. Et integer facilisi eget<br />diam.</p>

                <div className="button-container">
                    <button>Explore</button>
                </div>
            </div>

            <div className="imageStyle">
                <img src="https://s3-alpha-sig.figma.com/img/bdf4/575f/2cb344eb4f41c47d59e22f1c06edefc5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RimXAbvHxljsbETWF5i9sVyLK9zCEmC4bD9KxgytO8EyUcOAztvg2o-66v9H2m9vHlM8ZfDPaOmUShJOmL14sR8Hf9qyfTlu2nDELMgqhXs1h5RoOSISWHqhZbannfdtNciQAMspQ4et9mQOXn-lUD72R1uq4T5E-Hl2i~tpfBbCdjuq4LBEdc5C5g30Wukn5Xt2r5kZMnLb8QYGeJJNEeVwMJdXjd4n500tTD9R20zP5Z9fm8BKkMmf4QzgSYWwtcQH6eZAaXciwIIoN2AqzPIQAaq~I85qJAFnxjTqwMZy5vxPyGmjZQAPOC-2nW1NNUfVXwUGF4V0E640wKaIsg__" alt="image" />
                <img src="https://s3-alpha-sig.figma.com/img/1754/a7aa/a4f669f3f83078046e71609705e57dbb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jhj~lyou8j2lu-R6qfHpB82h1T~SVTJx47KZQ-oFZPRpFxRI8cNnn~QAtuupejaVm413572BvyMQRUa9GwNoU6bBvfw26-to4d2Jcy2cdU1Acwqqz~juQZgg0ERCGUkezUcL2KEZK8zrNBSwEQgVrdw4bxM1k6Wp2w49OpPkftuhHdJTy-ipVIsdawLNBaFp3Xfm4ZrdnvWPySa3bwZlxHSfuK-F~agXwpyCSaGSdI~JQ~1sueQcKTLvl6ZwnTfZ9Cqd7kCEtAVP3cYThzLddx5WWz-EVid96W3kapmsbULEdjh1dAksBVDFzRZCcqUXmxr2KAynJcX-LvRhr9SldQ__" alt="image" />
                <img src="https://s3-alpha-sig.figma.com/img/71e0/5245/f354bdeef965486a5e1ee595e5320529?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VfT3ckB29ET17fFI7IbGGwB0flbC3x2UuHyJSLieYT6wyM2oa2tck2xpglsXV5leqz5qsQgFB95mbrGxDmfyKss0EOayQZQsQcfYJJCzE3gf-TtaiwgdWdRrC1pFrQVyR2Eb8iyz8RfOEHjXA8wvEBNe7OE1GYXWiukJpWNXQAx5Ux2md2p-mSddocH4egddBfLitKOvtw8REA5f2DV0czinKR7WAf5pIVjAa9T94ZieJ0JuEn-GXHRexZjYiFKa-mBU0tSD3xUqLxzUNdzexLCE4WUvg5960eFFK3D9Ca2K~0FP3X6YNk-Dz-zKdouO4ag8S4r-Jd~oKoR~jmVNcg__" alt="image" />
                <img src="https://s3-alpha-sig.figma.com/img/4f07/6c2e/c123408dc6a729608ef9c593648e51c9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmf674l4l1r9WrRGX8zkwcgnjkd27rDbEVoXpI3JrV2VYxW~9Sjb1KjtE~Pkh418ZS-UrBQZbA9fHpy0t5t0UEqRHS5PUOofNeuABgEkybU53CdHQi~PSYwUOv9eGJE7TgijCJvfq-6iOelFoTHoUsflKQ~1JINrhzPh0dr5IGloNYVwEf59yOPjQqKybucItOBgKk2UBIvxJXdfVJhsJgamo3t2qTtH8oG4dBt1EueS~jMEim4Ikmn-PhPQQhl5EXXRoC6CRTl9Gm0Ais67foj5h~RD7SvTzCnoQKgTtHYM0Md14K4YzOUVtbY7sa0Az40XgTXAf~3R0Z-aoT-s0g__" alt="image" />
            </div>
            <div className='imageStyle'>
                <img src="https://s3-alpha-sig.figma.com/img/578d/cfb0/ea8b8391fcdfd9bc097adcc580dc14d9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPEoe6-I-AKdXsoTMHaayNnhNk7zfKY2Ghgf1jnk0V8BWEvcHBtA11NotXVSli1tfng6CwcqdoKQ2oFZNVuUvRiNw6U9piQ8YiBulsAuSow4BoUMVW8o4SaCmw4s9nsIaXKaIiAzGI1Q~zYutuItt3A~CEX8-~WSDV~ySete~2od77bXWBvymU-P5TRGyflS6CZBaKRoYj3h44jbpdrBBSFUx~X0Agf44KRge8CB5RDa~28tZvsao-24HdXkz2MDPx4CxMMZFQot4U-0cF3B10F0xfghx0kJTBpQy7N~R7fG1TOvcmYkgPkgvEHztHYJeNbzXR4HpJ2q0CNIznNxOA__" alt="image"/>
                <img src="https://s3-alpha-sig.figma.com/img/505b/5f3c/cb8fd17165aec11ef4f76ee4ec1b13c0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nDQZJu17OVUNDkEEUBZDCSNRReL0xdy1lvMFFtZRoRskrIhLVw20h0QL8kurQuSRWLJLMgTNOtTqr9sAHiCG7LLSqHEV6k2ln3trzGl9OCWxnAthL2k~TpiGKyWxjOl7Rxj4U7JGJceIoYoQliPY~9dP6gUcI1IzAM9u68V9nkGMwA1SZCoeYZdHXnaG7qD712-U4s9tFUcfhN4LhbZPzy1whDb-7~AOsWqJb13-rm9pmty8HuGUVumBlqntcUWBjnlgWH6nREpng~s5veB9YIVm7iofUZhl1ShtI5JfjlAfj5AsgF-c9SV7qkobw4GtN2yGv6Lk62k6B2Z8fNxwdQ__" alt="image"/>
                <img src="https://s3-alpha-sig.figma.com/img/c64e/b085/ecdb9f2607e2f92ea49ae39e6b008ad5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYqkWJPwRfpAxU8CDPjOJJFwPU2U-QcELl7b~kDfaYDJrzBEdedpq26QWzgNQyMh8ETqmb3r~YI~rNhIuaHY1uuN6CSM09JJuC~MnvZIhCWuGfYnCBz7l1moqHviVKGeuZGIF6BTZL-0DROpl1ZZujqHrsg11W5H8ryboOx1yAT3R4aEmLKt4sem-s1XLnLhhiedvXmUhq-N77VAz~OWstX6pgFSoZOOW69FKlyCpmIAcOLDiWfGjQVJ6Wfif8XUGn3IT0UC664fILafTN2vkYUn~C4Zxn911FvhdXyAApZ32Rr0uhCV25yB2WopZeKNW4jba2nMAR7xxj9VwqWjzg__" alt="image"/>
                <img src="https://s3-alpha-sig.figma.com/img/476e/e287/a70bc18b4c5de81aedaa8dd7dde84f3a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjiiO4O03hhHfnz8ZVWu3KfXbTavI2tzgT7Mk8Xbwh6r3Ff-DyL-HAYOMgi54WN8UNoNUuj37SVYBWwOvhS~Ls0z5cw95qvGB4Z6kQ7E5c4luqXx8iEJyKsRUGiFfsxliyMQtWN2HcGsM0S-sp1ClzQ3nhx49tJ9GBm3dcse8rvX0sWZZlFfDyxBXiJ6ztEOMoh6eyFqopy-Xikzd1WUeH4GrCVsDFO-kyv~5j4oQVAJ68eGBCtJytfY865TSMMKgY~MVZZc5~Yfc0QRJOqYjOC75DL0-zJfWeP7am57t9KPE0v66jdC0uUr9QrOdpDd6-0f3PoHcNkrVhIquxSmGg__" alt="image"/>
            </div>

            <div className="imageContainer">
                <div className="h3">
                    <h3>Discover the <br /> beauty around <br /> the world</h3>
                </div>
            
                    <img src="https://s3-alpha-sig.figma.com/img/c637/c990/08973b73bb9d7944849f3345872d40c2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLkx-Pw77isK8huL5kde4qEZZf21tznGuTymUaHFWSRDN770ECy2TaSFrI~XuSdLxdetOoBK3LQN1a05eKRUojKNJhU7P959lusk~h0FEp3-Pcv15-E3Nb9fYi5mGDvKr5kKQ6NGRwx68C6VKLiwYSvyztD7RmESE1ecj4cI3RJ0he24zTHFDZDdm3ree~y3b~kGfn~kbhogxEqnCYBYBVJlbprFOAcekKsXHuvJySq0YCCqSc4W7TWq5ZxEUfdjIbUs8LfAIVz7p051ncua1ngIWXJb1klDrJaBWi5UTr9sHBlYoAjq-DpcHl6LpaWShefR0gUOIdHb76sGnhstPg__" alt="image" />

            </div>
            
            

            <div className="p1">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Faucibus in libero risus<br /> semper habitant arcu.</div>
        
            <div className="button-container1">
                <button>Get started</button>
            </div>
            <div className='imageRight'>
                <img src="https://s3-alpha-sig.figma.com/img/53e4/e5d3/78592e14dcb867482922b07570315e08?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CbYHGHKoNYHYToZ2v1lv5z~LgQt-AxoZZRrF6Lr0NF2u97baqB7KxM~K9r5XG6yGpODulD7H8j29mWT60y0FfX1Vu87738cQFXrLlTeYV-XB6PXvLV7lqpoXB0E9Ldxzq-QU4FO6D2dIqUSjFgjzVBM1lrlCbhXKgor-MvxDT4rdZ7DDk8aKdRhTUS8gyQ9Ifi2rpfZAq1-HSf4HRVNmb1gBsmr5ZideVIPQuANBLQAP0DXKN9DqaBTtRY-33LzpjVGg8svxYMHSCCYJtkrhNRnEqKBgnNPkA7o7bYuM-JBdy48pq-kuPZCMRgAxDVK8g2qwfk3KKiLNx0bzh-cXVQ__"  alt="image1"/>
            </div>
            <div className='imageCard'>
                <div className='imageCardNum'>01</div>
                <img src="https://s3-alpha-sig.figma.com/img/9c4c/dd77/210c97745f0956f385661929cec2f84d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zx4L4e-B7RO8kAqBtlBmhjM8PMlpX-ZLY6-GqfSiADJkL~w4P1HHJF7oZ99ZodQps-8Q-KL6Sx~pLt9VxkCyBtvOErJtj~igH2NgS0RdMFiGCTB6qwlb0rJcB5Y5BJURJhr-1TIwsyH1P~hBlbTm-namFN4TeMx17ukyM0yBb1-3frF7IPB93zodj2dwEow0SZ6t~hwGU-sY37pEG17WZn60lbmvFFNR-N5SUOcljgwVk0oUwLVODV7wVCCc8p5A0IY-~pSMFXpHn6xPu3s9lGksIyV9HG6bizRJxL5FWiWdLvngofDHuAKqZvY318HYs61WH7vrFD0NP9qb1JccgA__" alt="imageA"/>
            </div>
        </div>
        
    );
}

export default TopicBox;
