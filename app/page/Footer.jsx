"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
const Footer = () => {
    return (
        <footer className="bg-muted py-12">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">MockAI</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Practice real-time interviews with our AI-powered platform. Get instant feedback and improve your interviewing skills.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                <span className="text-xl">🔗</span> {/* Replace with actual LinkedIn icon */}
              </a>
              <a href="#" aria-label="Email" className="text-muted-foreground hover:text-primary">
                <span className="text-xl">📧</span> {/* Replace with actual Mail icon */}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container mt-12 pt-6 border-t">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} MockAI. All rights reserved.
          </p>
        </div>
      </footer>
    );
};

export default Footer;

