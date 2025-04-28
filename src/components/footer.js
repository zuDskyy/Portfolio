import React from "react";

export const Footer = () => (
    <footer id="contact" className=" text-center bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-gray-400 py-10">
        <p>&copy; {new Date().getFullYear()} SkinHub – All rights reserved.</p>
        <div className="mt-2 text-sm">
            <p>Discord: @skinhub.gg | Twitter: @SkinMarketplace | Email: support@skinhub.gg</p>
        </div>
    </footer>
);
