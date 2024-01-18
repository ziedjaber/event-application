"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import './style.css';
import { Link } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <link rel="icon" href="/assets/images/logo.svg" />
      <>
        <section>
          <div>
            <div>
              <h1>Host, Connect, Celebrate: Your Events, Our Platform!</h1>
              <p>Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community</p>
              <Button>
                <a href="#events">
                </a>
                Explore Now
              </Button>
            </div>
            <Image
              src="/assets/images/hero.png"
              width={1000}
              height={1000}
              alt='hero'
            />
          </div>
        </section>
        <section id='events'>
          <h2>
            Trusted by <br /> Thousands of Events
          </h2>
          <div>
            Search
            CategoryFilter
          </div>
        </section>
      </>
    </main>
  );
}
